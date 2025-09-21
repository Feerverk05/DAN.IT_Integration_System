require('dotenv').config();
require('reflect-metadata');
const { DataSource } = require('typeorm');

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postq1207',
  database: process.env.DB_NAME || 'postgres',
  synchronize: false,
  logging: false,
  entities: [require('./src/entities/User'), require('./src/entities/Newspost')],
  migrations: [require('./src/migrations/1724680000000-AddDeletedAndRenameTitle')],
});

module.exports = { AppDataSource };
