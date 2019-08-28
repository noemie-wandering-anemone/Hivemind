module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './server/dev.sqlite3'
    },
    migrations: {
      directory: './server/migrations'
    },
    seeds: {
      directory: './server/seeds'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, cb) =>
        conn.run('PRAGMA foreign_keys = ON', cb)
    }
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    migrations: {
      directory: './server/migrations'
    },
    seeds: {
      directory: './server/tests/seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './server/migrations'
    },
    seeds: {
      directory: './server/seeds'
    }
  }
}
