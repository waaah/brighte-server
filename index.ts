import config from "./config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers";
import typeDefs from "./schema/typeDefs";
import { AppDataSource } from "./data-source";
import { LeadService } from "./services/lead/LeadService";
import { Lead } from "./schema/db/entity/Lead";
import { Service } from "./schema/db/entity/Service";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");
});

startStandaloneServer(server, {
  listen: { port: config.appConfig.PORT as number },
  context: async () => ({
    leadService: new LeadService(
      AppDataSource.getRepository(Lead),
      AppDataSource.getRepository(Service)
    ),
  }),
}).then(() => console.log("Running GraphQL server"));
