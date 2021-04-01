import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { render } from "@testing-library/react";
import Home from './home'


describe("Homepage components are loads", () => {
  let home;

  beforeEach(() => {
     home = render(<Router><Home /></Router>);
  })
  test("Header is load", () => {
    expect(home.getByRole('banner')).toBeTruthy();
  })

  test("Carrousel is load", () => {
    expect(home.getByRole('carousel')).toBeTruthy();
  })

  test("Footer is load", () => {
    expect(home.getByRole('contentinfo')).toBeTruthy();
  })
})