import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the button component", () => {
    render(
      <Button
        label="Button Component"
        onClick={() => {
          alert("Testing click event on button!");
        }}
      />
    );
  });
});
