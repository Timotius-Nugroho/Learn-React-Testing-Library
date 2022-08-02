import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "../components/Login";

describe("Login Component", () => {
  const handleSetIsLoginMock = jest.fn();
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render Login form", async () => {
    const { getByLabelText, findByText, getByTestId, debug } = render(
      <Login handleSetIsLogin={handleSetIsLoginMock} />
    );

    // expect(container).toBeInTheDocument();
    // debug();
    const email = getByTestId("email-test");
    const password = getByLabelText(/Password/i);
    const submitBtn = await findByText(/Login/i);

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    fireEvent.change(email, { target: { value: "tes@mail.com" } });
    fireEvent.change(password, { target: { value: "123" } });
    fireEvent.click(submitBtn);
    expect(handleSetIsLoginMock).toHaveBeenCalledTimes(1);
  });

  it("entering an invalid password shows an error message", () => {
    window.alert = jest.fn();

    const { getByLabelText, getByText, debug } = render(
      <Login handleSetIsLogin={handleSetIsLoginMock} />
    );
    const email = getByLabelText(/Email/i);
    const password = getByLabelText(/Password/i);
    const submitBtn = getByText(/Login/i);

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    // debug();

    fireEvent.change(email, { target: { value: "tes@mail.com" } });
    fireEvent.change(password, { target: { value: "1234" } });
    fireEvent.click(submitBtn);

    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith("Wrong email or password");
  });
});
