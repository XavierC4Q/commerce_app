import express from 'express'
import jsonwebtoken from 'jsonwebtoken'
import {
    config
} from './config'
import {
    graphqlSchema
} from './schema/index'
import {
    buildSchema
} from 'graphql'
import graphqlHTTP from 'express-graphql'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import morgan from 'morgan'

const {
    types,
    resolvers
} = graphqlSchema

const app = express()
const schema = buildSchema(types)

const verifyToken = (req, res, next) => {
    const tokenPresent = req.headers['authorization']
    if(tokenPresent){
        jsonwebtoken.verify(tokenPresent, config.jwtSecret, (err, valid) => {
            if(valid){
                req.user = valid
            }
        })
    }
    next()
}

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cookieParser())

app.use('/graphql', 
bodyParser.json(),
verifyToken,
graphqlHTTP(req => ({
    schema: schema,
    context: { user: req.user },
    rootValue: resolvers,
    graphiql: true,
})))

app.use('*', (req, res, next) => {
    let errors = new Error('INVALID PATH')
    errors.status = 404
    next(errors)
})

app.use((err, req, res) => {
    if (err.status) {
        res.status(404).json({
            message: 'Bad request. Wrong path'
        })
    } else {
        res.status(500).json({
            message: 'SERVER CRASHED'
        })
    }
})

app.listen(config.port, (req, res) => {
    console.log(`SERVER UP AND RUNNING: localhost:${config.port}`)
})