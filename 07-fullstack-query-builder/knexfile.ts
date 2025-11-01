export default {
  client: 'sqlite3',
  connection: {
    filename: './src/database/database.db',
  },
  migrations: {
    extension: 'ts',
    directory: './src/database/migrations',
  },
  useNullAsDefault: true,
  seeds: {
    extension: 'ts',
    directory: './src/database/seeds',
  },
}
