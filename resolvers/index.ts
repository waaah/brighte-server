import helloTypeDefs from "./hello/hello";
import { helloResolver } from "./hello/hello.resolver";
import { leadResolver } from "./lead/lead.resolver";
import leadTypeDefs from "./lead/lead.typedefs";

export const resolvers = {
  ...helloResolver,
  ...leadResolver,
};

export const typeDefs = [helloTypeDefs, leadTypeDefs];

export default resolvers;
