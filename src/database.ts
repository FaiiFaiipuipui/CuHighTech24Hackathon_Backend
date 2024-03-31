import { Database } from './types.ts'
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'

const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'MainApplicationDB',
    host: 'localhost',
    user: 'LHFunds_Admin',
    password: process.env.LH_FUNDS_ADMIN_DB_PASSWORD,
    port: 5434,
    max: 10,
  })
})

// Database interface is passed to Kysely's constructor, and from now on, Kysely 
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how 
// to communicate with your database.
export const db = new Kysely<Database>({
  dialect,
})