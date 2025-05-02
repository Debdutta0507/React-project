import { expect, vi } from "vitest";
import { test } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";
import { renderHook, waitFor } from "@testing-library/react";
const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();
const testPizza = {
  id: "calabrese",
  name: "The Calabrese Pizza",
  category: "Supreme",
  description:
    "Salami, Pancetta, Tomatoes, Red Onions, Friggitello Peppers, Garlic",
  image: "/public/pizzas/calabrese.webp",
  sizes: { S: 12.25, M: 16.25, L: 20.25 },
};
test("Fixing usePizza", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay(""));
  await waitFor(() => {
    expect(result.current).toEqual(testPizza);
  });
  expect(fetchMocker).toBeCalledWith("/api/pizza-of-the-day");
});
