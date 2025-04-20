import { CartContext } from "../Context";
import Header from "../Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import PizzaOfTheDay from "../PizzaOfTheDay";
import { useState } from "react";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
  component: () => {
    const [cart, setCart] = useState([]);
    return (
      <>
        <CartContext value={[cart, setCart]}>
          <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </CartContext>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    );
  },
});
