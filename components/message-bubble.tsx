import React from "react";

export const MessageBubble = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        background: "#efefef",
        padding: "1rem",
        borderRadius: "1rem 1rem 1rem 0",
        margin: "1rem",
      }}
    >
      {children}
    </div>
  );
};
