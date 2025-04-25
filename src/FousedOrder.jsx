import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchPastEachPizza } from "./api/fetchPastEachPizaa";
import Modal from "./Modal";

// Initialize currency formatter
const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const FousedOrder = ({ focusedOrder, setFocusedOrder }) => {
  const [showModal, setShowModal] = useState([]);
  const { data: pastOrderData, isLoading: isLoadingPastOrder } = useQuery({
    queryKey: ["pizza", focusedOrder],
    queryFn: () => fetchPastEachPizza(focusedOrder),
    staleTime: 24 * 60 * 60,
    enabled: !!focusedOrder,
  });

  return showModal ? (
    <Modal>
      <h2>Order #{focusedOrder}</h2>
      {!isLoadingPastOrder ? (
        <table>
          <thead>
            <tr>
              <td>Image</td>
              <td>Name</td>
              <td>Size</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {pastOrderData.orderItems.map((pizza) => (
              <tr key={`${pizza.pizzaTypeId}_${pizza.size}`}>
                <td>
                  <img src={pizza.image} alt={pizza.name} />
                </td>
                <td>{pizza.name}</td>
                <td>{pizza.size}</td>
                <td>{pizza.quantity}</td>
                <td>{intl.format(pizza.price)}</td>
                <td>{intl.format(pizza.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading …</p>
      )}
      <button onClick={() => setFocusedOrder()}>Close</button>
    </Modal>
  ) : null;
};
export default FousedOrder;
