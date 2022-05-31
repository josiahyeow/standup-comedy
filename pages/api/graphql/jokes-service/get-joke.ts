import fetch from "isomorphic-unfetch";

export async function getJoke() {
  return fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((r) => r.json())
    .then((data) => data);
}
