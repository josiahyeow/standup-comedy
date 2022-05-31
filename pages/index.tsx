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
        <div
          style={{
            background: "#efefef",
            padding: "1rem",
            borderRadius: "1rem 1rem 1rem 0",
            margin: "1rem",
          }}
        >
          <Joke />
        </div>
      </div>
    </div>
  );
};

export default JokePage;
