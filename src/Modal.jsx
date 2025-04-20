import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  const pointModal = useRef(null);
  if (!pointModal.current) pointModal.current = document.createElement("div");

  useEffect(() => {
    const modal = document.getElementById("modal");
    modal.appendChild(pointModal.current);
    return () => modal.removeChild(pointModal.current);
  }, []);

  return createPortal(<div>{children}</div>, pointModal.current);
}
