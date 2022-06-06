import { Joke, query } from "./joke";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Joke", () => {
  describe("joke is loading", () => {
    it("shows loading text", async () => {
      render(
        <MockedProvider>
          <Joke />
        </MockedProvider>
      );
      expect(await screen.findByText("...")).toBeInTheDocument();
    });
  });
  describe("error getting joke", () => {
    const mocks = [
      {
        request: {
          query,
        },
        error: new Error("Network error"),
      },
    ];
    it("shows could not find joke text", async () => {
      render(
        <MockedProvider mocks={mocks}>
          <Joke />
        </MockedProvider>
      );
      expect(
        await screen.findByText("Could not find joke.")
      ).toBeInTheDocument();
    });
  });
  describe("no joke received", () => {
    const mocks = [
      {
        request: {
          query,
        },
        result: {
          data: {
            tellJoke: null,
          },
        },
      },
    ];
    it("shows could not find joke text", async () => {
      render(
        <MockedProvider mocks={mocks}>
          <Joke />
        </MockedProvider>
      );
      expect(
        await screen.findByText("Could not find joke.")
      ).toBeInTheDocument();
    });
  });
  describe("joke received", () => {
    const mocks = [
      {
        request: {
          query,
        },
        result: {
          data: {
            tellJoke: "funny joke",
          },
        },
      },
    ];
    it("shows joke text", async () => {
      render(
        <MockedProvider mocks={mocks}>
          <Joke />
        </MockedProvider>
      );
      expect(await screen.findByText("funny joke")).toBeInTheDocument();
    });
  });

  describe("tell another button clicked", () => {
    it.todo("shows another joke");
  });
});
