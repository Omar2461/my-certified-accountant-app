import { createPortal } from "react-dom";

function BackDrop({ onClose }) {
  const content = (
    <div onClick={onClose} className="w-[100%] h-[100vh] z-99 fixed bg-black top-0 right-0 opacity-50"></div>
  );
  return createPortal(content, document.getElementById("backdrop"));
}

export default BackDrop;
