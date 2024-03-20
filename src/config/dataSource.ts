import { DataSource } from 'typeorm';

import env from './env';

export default new DataSource({
  type: 'mysql',
  host: env.dbHost,
  port: env.dbPort,
  username: env.dbUser,
  password: env.dbPassword,
  database: env.dbName,
  migrations: [`${__dirname}/../database/migrations/*.ts`],
  migrationsTableName: 'migrations',
});
