import { prepareToTellJoke } from "./tell-joke";

const deps = {
  getJoke: jest.fn(),
  checkIfJokeHasBeenTold: jest.fn(),
  addJokeToListOfToldJokes: jest.fn(),
} as any;

const tellJoke = prepareToTellJoke(deps);

describe("tell joke", () => {
  describe("joke found has not been told", () => {
    beforeEach(() => {
      deps.getJoke.mockResolvedValue({ id: "1", joke: "something funny" });
      deps.checkIfJokeHasBeenTold.mockResolvedValue(false);
    });
    it("tells joke", async () => {
      const jokeTold = await tellJoke();
      expect(jokeTold).toEqual("something funny");
    });
    it("adds joke to list of told jokes", async () => {
      await tellJoke();
      expect(deps.addJokeToListOfToldJokes).toHaveBeenCalledWith("1");
    });
  });
  describe("joke found has already been told before", () => {
    beforeEach(() => {
      deps.getJoke.mockResolvedValueOnce({ id: "1", joke: "something funny" });
      deps.getJoke.mockResolvedValueOnce({
        id: "1",
        joke: "something funnier",
      });
      deps.checkIfJokeHasBeenTold.mockResolvedValueOnce(true);
    });
    it("tells a new joke", async () => {
      const joke = await tellJoke();
      expect(joke).toEqual("something funnier");
    });
  });
});
