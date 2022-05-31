import { JokesService } from "./jokes-service/jokes-service";

export const resolvers = {
  Query: {
    tellJoke: () => {
      const jokes = JokesService();
      return jokes.tellJoke();
    },
  },
};
