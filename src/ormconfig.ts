import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import User from './entities/User';
import Newspost from './entities/Newspost';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postq1207',
  database: process.env.DB_NAME || 'postgres',
  synchronize: false,
  logging: false,
  entities: [User, Newspost],
  migrations: ['./src/migrations/*.js'],
});

export { AppDataSource };
