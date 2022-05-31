export function prepareToAddJokeToList(toldJokes: Set<string>) {
  return async function addJokeToList(id: string) {
    toldJokes.add(id);
  };
}
