import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Route } from "../routes/contact.lazy";
const queryClient = new QueryClient();
const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

test("test fetch mock", async () => {
  fetchMocker.mockResponse(JSON.stringify({ stutus: "ok" }));
  const screen = render(
    <QueryClientProvider client={queryClient}>
      <Route.options.component />
    </QueryClientProvider>,
  );
  const name = screen.getByPlaceholderText("Name");
  const email = screen.getByPlaceholderText("Email");
  const text = screen.getByPlaceholderText("Message");
  name.value = "deb";
  email.value = "deb@gmail.com";
  text.value = "jdhjhsdjhsjh";
  const submit = screen.getByRole("button");
  submit.click();
  const h3 = await screen.findByRole("heading", { level: 3 });
  expect(h3.innerText).toContain("Submit");
  const requests = fetchMocker.requests();
  expect(requests.length).toBe(1);
  expect(requests[0].url).toBe("api/contact");
});
