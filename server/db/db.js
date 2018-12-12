import * as pgp from 'pg-promise'
import { config } from '../config'

export const db = pgp()(config.db)


