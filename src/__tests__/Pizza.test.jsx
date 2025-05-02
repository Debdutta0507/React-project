import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import Pizza from "../Pizza";
afterEach(cleanup);

test("Test if the image is displayed as expected", () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="super cool pizza" image={src} />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});
