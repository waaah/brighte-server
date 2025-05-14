import "dotenv/config";

const appConfig = {
  PORT: process.env.PORT || 3000,
};

const dbConfig = {
  PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  USER: process.env.DB_USER || "pguser",
  PASSWORD: process.env.DB_PASSWORD || "pgpassword",
  HOST: process.env.DB_HOST || "localhost",
  DATABASE: process.env.DATABASE || "brighte",
  SYNCHRONIZE: process.env.DB_SYNCHRONIZE ? Boolean(process.env.DB_SYNCHRONIZE) : true,
};

const config = {
  appConfig,
  dbConfig,
};

export default config;
