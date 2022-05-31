import { useQuery } from "@apollo/client";
import { gql } from "apollo-server-core";
import type { NextPage } from "next";

const JokePage: NextPage = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <div
        style={{
          margin: "auto",
          width: "480px",
          background: "#efefef",
          padding: "1rem",
          borderRadius: "1rem 1rem 1rem 0",
        }}
      >
        <Joke />
      </div>
    </div>
  );
};

const Joke: NextPage = () => {
  const { data, loading, error } = useQuery(query);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data?.tellJoke) {
    return <p>Could not find joke.</p>;
  }

  return <div>{data.tellJoke}</div>;
};

const query = gql`
  query TellJoke {
    tellJoke
  }
`;

export default JokePage;
