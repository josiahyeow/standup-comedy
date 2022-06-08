import { useQuery, gql } from "@apollo/client";
import type { NextPage } from "next";
import { MessageBubble } from "./message-bubble";

export const Joke: NextPage = () => {
  const { data, loading, error, refetch } = useQuery(query);

  if (loading) {
    return (
      <MessageBubble>
        <p>...</p>
      </MessageBubble>
    );
  }

  if (error || !data?.tellJoke) {
    return <p>Could not find joke.</p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <MessageBubble>{data.tellJoke}</MessageBubble>
      <button
        type="button"
        onClick={async () => {
          await refetch();
        }}
      >
        Tell another
      </button>
    </div>
  );
};

export const query = gql`
  query TellJoke {
    tellJoke
  }
`;
