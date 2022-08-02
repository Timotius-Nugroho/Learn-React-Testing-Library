import React from "react";
import { render } from "@testing-library/react";
import Hello from "../components/Hello";

test("render username", async () => {
  let usernameMocks = "timo";
  const { container, debug, getByText } = render(
    <Hello userName={usernameMocks} />
  );
  // debug();
  const userNamePrint = getByText(`Hello, ${usernameMocks}!`);

  expect(container.firstChild.classList.contains("greeting")).toBe(true);
  expect(userNamePrint).toBeInTheDocument();
});
