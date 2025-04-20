import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import fetchPastPizza from "../api/fetchPastPizza";
import { useState } from "react";

export const Route = createLazyFileRoute("/past")({
  component: PastOrder,
});

function PastOrder() {
  const [page, setPage] = useState(1);
  const { isLoading, data } = useQuery({
    queryKey: ["past-Order", page],
    queryFn: () => fetchPastPizza(page),
    staleTime: 300000,
  });

  if (isLoading) return <div>loading bro....</div>;

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
              <tr>
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
    </>
  );
}
