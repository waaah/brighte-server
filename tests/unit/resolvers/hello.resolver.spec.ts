import { helloResolver } from "../../../resolvers/hello/hello.resolver";

describe("hello.resolver.spec.ts", () => {
  it("should return a greeting", () => {
    const response = helloResolver.Query.greet();
    expect(response).toBe("Hello world!");
  });
});
