import { Context } from "@apollo/client";

export const resolvers = {
  Query: {
    tellJoke: (_root: {}, _args: {}, context: Context) => {
      return context.jokes.tellJoke();
    },
  },
};
