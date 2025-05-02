import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import fetchPastPizza from "../api/fetchPastPizza";
import { Suspense, use, useState } from "react";
import FousedOrder from "../FousedOrder";

const SuspensePastOrder = () => {
  const [page, setPage] = useState(1);
  const loadPromise = useQuery({
    queryKey: ["past-Order", page],
    queryFn: () => fetchPastPizza(page),
    staleTime: 300000,
  }).promise;
  return (
    <Suspense
      fallback={
        <div className="past-order">
          <h2>Past Order loading</h2>
        </div>
      }
    >
      <PastOrder loadPromise={loadPromise} page={page} setPage={setPage} />
    </Suspense>
  );
};
export const Route = createLazyFileRoute("/past")({
  component: SuspensePastOrder,
});

function PastOrder({ loadPromise, page, setPage }) {
  const data = use(loadPromise);
  const [order, setorder] = useState(false);

  return (
    <>
      <div className="past-orders">
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Date</td>
              <td>time</td>
            </tr>
          </thead>
          <tbody>
            {data.map((val) => (
              <tr onClick={() => setorder(val.order_id)}>
                <td>{val.order_id}</td>
                <td>{val.date}</td>
                <td>{val.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pages">
          <button disabled={page >= 8} onClick={() => setPage(page + 1)}>
            Next
          </button>
          <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
            Back
          </button>
        </div>
      </div>
      {order && <FousedOrder focusedOrder={order} setFocusedOrder={setorder} />}
    </>
  );
}
