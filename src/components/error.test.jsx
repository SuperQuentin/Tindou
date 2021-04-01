import React from "react";
import { render } from "@testing-library/react";
import Error from './error'

describe("Error message display", () => {
  test("Nothing is display where there is no error message", () => {
    const error = render(<Error />);

    expect(error.container.childElementCount).toBeFalsy()
  })
  test("Display where there is an error message", () => {
    let msg = "Ressources can't be found"
    const error = render(<Error errorMsg={msg}/>);

    expect(error.container.textContent).toContain(msg)
  })
})