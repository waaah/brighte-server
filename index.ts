import express from "express";
import config from "./config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers";
import typeDefs from "./schema/typeDefs";

// Sample schema and resolver

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: config.appConfig.PORT as number },
});
