import express from "express";
import config from "./config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers";
import typeDefs from "./schema/typeDefs";
import { AppDataSource } from "./data-source"

// Sample schema and resolver

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!")
})

startStandaloneServer(server, {
  listen: { port: config.appConfig.PORT as number },
})
  .then(() => console.log("Running GraphQL server"));
