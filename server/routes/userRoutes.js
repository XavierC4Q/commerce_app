import express, { Router } from 'express'
import { userQueries } from '../db/userQueries'

const router = Router()

router.post('/create', userQueries.createUser)

export {
    router
}