export default {
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT as unknown as number,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
};
