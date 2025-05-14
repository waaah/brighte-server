import { helloResolver } from "./hello.resolver";
import { leadResolver } from "./lead/lead.resolver";

const resolvers = {
  ...helloResolver,
  ...leadResolver
};

export default resolvers;
