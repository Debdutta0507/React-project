export async function postRequest(email, name, message) {
  const response = await fetch("api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, name, message }),
  });
  if (!response.ok) {
    throw new Error("Network error");
  }
  return response.json();
}
