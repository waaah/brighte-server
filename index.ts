import config from "./config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers, { typeDefs } from "./resolvers";
import { AppDataSource } from "./data-source";
import { LeadService } from "./services/lead/LeadService";
import { Lead } from "./schema/db/entity/Lead";
import { Service } from "./schema/db/entity/Service";

const startApp = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: config.appConfig.PORT as number },
    context: async () => ({
      leadService: new LeadService(
        AppDataSource.getRepository(Lead),
        AppDataSource.getRepository(Service)
      ),
    }),
  });

  console.log(`Running GraphQL server at: ${url}`);
  console.log(`Access GraphQL Playground at: ${url}/graphQL`);
};

startApp();
