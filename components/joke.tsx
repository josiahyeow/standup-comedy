import { useQuery, gql } from "@apollo/client";
import type { NextPage } from "next";

export const Joke: NextPage = () => {
  const { data, loading, error } = useQuery(query);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data?.tellJoke) {
    return <p>Could not find joke.</p>;
  }

  return <div>{data.tellJoke}</div>;
};

export const query = gql`
  query TellJoke {
    tellJoke
  }
`;
