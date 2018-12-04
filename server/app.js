import express from 'express'
import http from 'http'
import { config } from './config'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import session from 'express-session'
import morgan from 'morgan'
import { graphqlSchema } from './schema/index'

const { types, resolvers } = graphqlSchema
const app = express()
const server = http.createServer(app)
const schema = buildSchema(types)

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: config.secret
}))

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(config.port, (req, res) => {
    console.log(`SERVER UP AND RUNNING: localhost:${config.port}`)
})