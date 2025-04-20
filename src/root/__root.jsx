import { CartContext } from "../Context";
import Header from "../Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import Order from "../routes/order.lazy";
import PizzaOfTheDay from "../PizzaOfTheDay";

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
      </>
    );
  },
});
