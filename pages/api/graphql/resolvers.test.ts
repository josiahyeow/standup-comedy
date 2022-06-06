import { graphql } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

const schema = makeExecutableSchema({ typeDefs, resolvers });

describe("Query", () => {
  describe("tellJoke", () => {
    it("tells a joke", async () => {
      const result = await graphql({
        schema,
        source: `
        query {
          tellJoke
        }
      `,
        contextValue: {
          jokes: {
            tellJoke: jest.fn().mockResolvedValue("something funny"),
          },
        },
        variableValues: {},
      });
      expect(result).toEqual({
        data: {
          tellJoke: "something funny",
        },
      });
    });
  });
});
