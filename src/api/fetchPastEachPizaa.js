export async function fetchPastEachPizza(order) {
  const response = await fetch(`/api/past-order/${order}`);
  const data = await response.json();
  return data;
}
