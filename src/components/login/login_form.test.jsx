import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./login_form";

describe("Enable/Disable login form button based on inputs value state (empty/not empty)", () => {
  test("Login button is disable when email and password inputs are empty", () => {
    const { getByTestId } = render(<Form />);

    let email =  getByTestId('email')
    let password = getByTestId('password')

    let loginBtn = getByTestId('loginbtn')

    expect(email.value).toBeFalsy()
    expect(password.value).toBeFalsy()
    expect(loginBtn.className.includes("login100-form-btn-disabled")).toBeTruthy()
    
  });

  test("Login button is disable when only email inputs is fullfilled", () => {
    const { getByTestId } = render(<Form />);

    let email =  getByTestId('email')

    email.setAttribute('value', 'testify@test.ch')
    fireEvent.change(email)

    let password = getByTestId('password')

    let loginBtn = getByTestId('loginbtn')

    expect(email.value).toBeTruthy();
    expect(password.value).toBeFalsy()
    expect(loginBtn.className.includes("login100-form-btn-disabled")).toBeTruthy()

  });

  test("Login button is disable when only password inputs is fullfilled", () => {
    const { getByTestId } = render(<Form />);

    let email =  getByTestId('email')

    let password = getByTestId('password')
    password.setAttribute('value', 'MIuMpLIGAbon')
    fireEvent.change(password)

    let loginBtn = getByTestId('loginbtn')

    expect(email.value).toBeFalsy();
    expect(password.value).toBeTruthy()
    expect(loginBtn.className.includes("login100-form-btn-disabled")).toBeTruthy()

  });

  test("Login button is enable when email and password inputs are fulfilled", async () => {
    const { getByTestId } = render(<Form />);

    let email =  getByTestId('email')
    email.setAttribute('value', 'testify@test.ch')
    fireEvent.change(email)

    let password = getByTestId('password')
    password.setAttribute('value', 'MIuMpLIGAbon')
    fireEvent.change(password)

    let loginBtn = getByTestId('loginbtn')

    expect(email.value).toBeTruthy();
    expect(password.value).toBeTruthy()
    expect(loginBtn.className.includes("login100-form-btn-disabled")).toBeFalsy()
  });
});
