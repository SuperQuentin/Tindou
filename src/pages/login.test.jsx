import React from "react";
import { render } from "@testing-library/react";
import Login from "./login";

describe("Login components are loads", () => {
  test("Loginform is load", () => {
    const login = render(<Login />);

    expect(login.getByTestId("loginform")).toBeTruthy();
  });

  test("Loginbackground is load", () => {
    const login = render(<Login />);

    expect(login.getByTestId("loginbg")).toBeTruthy();
  });
});
