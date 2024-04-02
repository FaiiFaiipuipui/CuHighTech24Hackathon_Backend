// Update with your config settings.
require('dotenv').config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_NAME,
      user:     process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_USER_PASSWORD
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_NAME,
      user:     process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_USER_PASSWORD
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
