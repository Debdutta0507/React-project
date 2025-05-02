import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import { postRequest } from "../api/contacts";
import { useFormStatus } from "react-dom";

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  const mutation = useMutation({
    mutationFn: function (formData) {
      return postRequest(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });

  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form action={mutation.mutate}>
          <UpdateInput type="text" name="name" placeholder="Name" />
          <UpdateInput type="email" name="email" placeholder="Email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}
function UpdateInput(props) {
  const { pending } = useFormStatus();

  return (
    <input
      disabled={pending}
      name={props.name}
      placeholder={props.placeholder}
      type={props.placeholder}
    />
  );
}
