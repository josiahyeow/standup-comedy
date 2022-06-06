import { Joke } from "../components/joke";
import type { NextPage } from "next";

const JokePage: NextPage = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <div
        style={{
          margin: "auto",
          maxWidth: "480px",
        }}
      >
        <Joke />
      </div>
    </div>
  );
};

export default JokePage;
