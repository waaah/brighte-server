# Brighte Server

A simple GraphQL endpoint built on Express

## How to start the application?

### 1. Install Required Software

- `Nodejs` - Required to run the app (https://nodejs.org/en)
- `Docker` - Create containerized components (https://www.docker.com/)

### 2. Running the application

1.  Install the required dependencies

Use `npm install` to install all dependencies needed to run the application

- `npm install`

2.  Bootstrap the database

Create fresh instance of a PostgreSql database running on Docker by running the command:

- `npm run db:bootstrap`

This command will also automatically add all new migration changes

3. Running the application

You can run the application using any of the commands below

- `npm run start` - Runs the application as is without automatic restart on changes
- `npm run start:watch` - Runs the application in watch mode, meaning changes are detected and the app is restarted

### 3. Running a sample request.

For dev purposes, you can run the GraphQL playground on your local server at `http://localhost:4000/graphql`

### 4. Create a .env file (optional)

The application will automatically run without an .env file but you can customize the configuration like database connection etc.

1. Open `config.ts`

   Cross reference the env values that you want to use/set.

   ```
   const dbConfig = {
    PASSWORD: process.env.DB_PASSWORD || 'pgpassword'
   }
   ```

   For example, if you want to change the DB password that is used, you will need to set `DB_PASSWORD` at the .env file for the changes to take effect

## Directory Structure

- `/data` - Data related files like Docker volumes
- `/migrations` - Current DB migrations
- `/resolvers` - GraphQL Resolvers to be used
- `/schema` - Validation schema, TypeORM Schemas and GraphQL type definitions
- `/tests` - Folder for test related files
  - `/tests/integration` - Integration tests
  - `/tests/unit` - Unit tests

## Commonly used commands

1. `npm run start` - Runs the application
2. `npm run start:watch` - Runs the application in watch mode
3. `npm run test` - Runs all tests including unit and integration tests
4. `npm run test:unit` - Runs all unit tests
5. `npm run test:integration` - Runs all Integration tests
6. `npm run db:bootstrap` - Bootstraps a new containerized database instance
7. `npm run db:migrate:generate` - Automatically generates a new migration based on entity changes
8. `npm run db:migrate:run` - Runs any new migration changes
