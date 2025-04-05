import { useEffect, useState } from "react";

// was making a mistake here while these type of definition use Order() then {}
export default function Order() {
  const [pizzaType, setPizzaType] = useState('peperoni"');
  const [pizzaSize, setPizzaSize] = useState();
  const [loading, setLoading] = useState(true);
  const [pizza, setPizza] = useState([]);

  async function fetchApi() {
    const res = await fetch("/api/pizzas");
    const pizza = await res.json();
    setPizza(pizza);
    setLoading(false);
  }
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div>
        <form>
          <div>
            <div>
              {/* the use of htmlfor if to increase accesibility for screen reader and it couples with id when one click the element it foucs on the id of the define html for  */}
              <label htmlFor="pizza-type">Pizza Types</label>
              {/* name is and value can be considered as couple when the form submit  the server reads pizza-type=Cheeze Burst. */}
              <select
                onChange={(e) => setPizzaType(e.target.value)}
                name="pizza-type"
                id="pizza-type"
                value={pizzaType}
              >
                {/* <option value={"peperoni"}>The peperoni Pizza</option>
                <option value={"Margaritha"}>Delicious Maragitha Pizza</option>
                <option value={"Cheeze Burst"}>Cheeze Burst Pizza</option> */}
                {pizza.map((data) => {
                  return <option value={data.id}>{data.name}</option>;
                })}
              </select>
            </div>
            <div>
              <label htmlFor="pizza-size">Select Pizza Size</label>
              <div id="pizza-size">
                <span>
                  <input
                    checked={pizzaSize === "medium"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                    type="radio"
                    value="medium"
                    id="pizza-medium"
                    name="pizza-size"
                  />
                  <label htmlFor="pizza-medium">Medium Pizza</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="small"
                    name="pizza-size"
                    value={"small"}
                    checked={pizzaSize === "small"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="small">Small Pizza</label>
                </span>
                <span>
                  <input
                    type="radio"
                    id="large"
                    name="pizza-size"
                    value={"large"}
                    checked={pizzaSize === "large"}
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="large">Large Pizza</label>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
