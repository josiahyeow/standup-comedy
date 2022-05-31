export function prepareToTellJoke({
  getJoke,
  checkIfJokeHasBeenTold,
  addJokeToListOfToldJokes,
}: {
  getJoke: () => Promise<{ id: string; joke: string }>;
  checkIfJokeHasBeenTold: (id: string) => Promise<boolean>;
  addJokeToListOfToldJokes: (id: string) => Promise<void>;
}) {
  return async function tellJoke(): Promise<string> {
    const joke = await getJoke();
    const hasBeenTold = await checkIfJokeHasBeenTold(joke.id);
    if (hasBeenTold) {
      return tellJoke();
    }
    await addJokeToListOfToldJokes(joke.id);
    return joke.joke;
  };
}
