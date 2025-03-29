import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
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
      <h1>Pizza</h1>
      <Pizza name={"Americano"} description={"Worst pizaa of decade"} />
      <Pizza name={"Double Crunch"} desciption={"Cruchy buttery pizza"} />
    </div>
  );
};
root.render(React.createElement(App));
