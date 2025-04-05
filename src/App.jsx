import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import Order from "./Order";
const App = () => {
  // return React.createElement(
  //   "div",

  //   {},

  //   [
  //     React.createElement("h1", {}, "Pizza"),
  //     React.createElement(Pizza, {
  //       name: "Americano",
  //       description: "Worst pizza of decade",
  //     }),
  //     React.createElement(Pizza, {
  //       name: "Double Crunch,",
  //       description: "Cruchy buttery pizza",
  //     }),
  //   ],
  // );
  return (
    <div>
      {/* <div>
        <h1 className="logo">Padre Gino's Pizza</h1>
        <Pizza
          name="Pepperoni"
          description="Mozzarella Cheese, Pepperoni"
          src={"/public/pizzas/pepperoni.webp"}
        />
        <Pizza
          name="The Hawaiian Pizza"
          description="Sliced Ham, Pineapple, Mozzarella Cheese"
          src={"/public/pizzas/hawaiian.webp"}
        />
        <Pizza
          name="The Big Meat Pizza"
          description="Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"
          src={"/public/pizzas/big_meat.webp"}
        />
      </div> */}
      <Order />
    </div>
  );
};
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(React.createElement(App));
