export function prepareToCheckJoke(toldJokes: Set<string>) {
  return async function checkJoke(id: string) {
    return toldJokes.has(id);
  };
}
