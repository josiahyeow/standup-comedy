import { prepareToAddJokeToList } from "./add-joke-to-list";
import { prepareToCheckJoke } from "./check-joke";
import { getJoke } from "./get-joke";
import { prepareToTellJoke } from "./tell-joke";
import { toldJokes } from "./told-jokes";

export function JokesService() {
  const tellJoke = prepareToTellJoke({
    getJoke,
    checkIfJokeHasBeenTold: prepareToCheckJoke(toldJokes),
    addJokeToListOfToldJokes: prepareToAddJokeToList(toldJokes),
  });
  return {
    tellJoke,
  };
}
