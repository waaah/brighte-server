import "dotenv/config";

const appConfig = {
  PORT: process.env.PORT || 4000,
};

const dbConfig = {
  DB: process.env.DB || "brighte",
  PORT: process.env.DB_PORT || 3306,
  USER: process.env.DB_USER || "pguser",
  PASSWORD: process.env.DB_PASSWORD || "",
};

const config = {
  appConfig,
  dbConfig,
};

export default config;
