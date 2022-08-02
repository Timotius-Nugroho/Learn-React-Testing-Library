import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { testApi as mockTestApi } from "../services/dummy";
import TestApi from "../components/testApi";

jest.mock("../services/dummy");

describe("Test API Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("render without crashing", () => {
    const { debug, getByText } = render(<TestApi />);
    const title = getByText(/DUMMY API/i);

    expect(title).toBeInTheDocument();
    // debug();
  });

  it("should print all users", async () => {
    const { debug, getByText } = render(<TestApi />);
    const getButton = getByText(/GET/i);
    mockTestApi.mockResolvedValueOnce([{ name: "Timo" }, { name: "Nugo" }]);

    expect(getButton).toBeInTheDocument();
    fireEvent.click(getButton);
    await wait(() => {
      expect(mockTestApi).toHaveBeenCalledTimes(1);
    });
    expect(getByText(/Timo/i)).toBeInTheDocument();
    expect(getByText(/Nugo/i)).toBeInTheDocument();
    // debug();
  });
});
