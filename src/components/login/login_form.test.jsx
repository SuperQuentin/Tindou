import React from "react";
import renderer from "react-test-renderer";
import Form from "./login_form";

describe("Enable/Disable login form button based on inputs value state (empty/not empty)", () => {
  test("Login button is disable when email and password inputs are empty", () => {
    let tree = renderer.create(<Form />).root;

    let email = tree.findByProps({ id: "email" });
    let password = tree.findByProps({ id: "password" });

    let loginBtn = tree.findByProps({ id: "loginButton" });

    expect(email.props.value).toBeNull();
    expect(password.props.value).toBeNull();
    expect(
      loginBtn.props.className.includes("login100-form-btn-disabled")
    ).toBe(true);
  });

  test("Login button is disable when only email inputs is fullfilled", () => {
    let tree = renderer.create(<Form email="testify@test.ch" />).root;

    let email = tree.findByProps({ id: "email" });
    let password = tree.findByProps({ id: "password" });

    let loginBtn = tree.findByProps({ id: "loginButton" });

    expect(email.props.value).toBeTruthy();
    expect(password.props.value).toBeNull();
    expect(
      loginBtn.props.className.includes("login100-form-btn-disabled")
    ).toBe(true);
  });

  test("Login button is disable when only password inputs is fullfilled", () => {
    let tree = renderer.create(<Form password="MIuMpLIGAbon" />).root;

    let email = tree.findByProps({ id: "email" });
    let password = tree.findByProps({ id: "password" });

    let loginBtn = tree.findByProps({ id: "loginButton" });

    expect(email.props.value).toBeNull();
    expect(password.props.value).toBeTruthy();
    expect(
      loginBtn.props.className.includes("login100-form-btn-disabled")
    ).toBe(true);
  });

  test("Login button is enable when email and password inputs are fulfilled", async () => {
    let tree = renderer.create(
      <Form email="testify@test.ch" password="MIuMpLIGAbon" />
    ).root;

    let email = tree.findByProps({ id: "email" });
    let password = tree.findByProps({ id: "password" });

    let loginBtn = tree.findByProps({ id: "loginButton" });

    expect(email.props.value).toBeTruthy();
    expect(password.props.value).toBeTruthy();
    expect(
      loginBtn.props.className.includes("login100-form-btn-disabled")
    ).toBe(false);
  });
});
