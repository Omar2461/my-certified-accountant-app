import { createPortal } from "react-dom";

import NavLinks from "./NavLinks";

function SideDrawer({ isOpen }) {
  const content = (
    <div
      className={`fixed top-0 right-0 z-[100] h-screen w-1/2 bg-white shadow-xl transform transition-all duration-300 ease-in-out
        ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }
      `}
    >
      <div className="mt-20">
        <ul>
          <NavLinks clasNames="p-4" />
        </ul>
      </div>
    </div>
  );

  return createPortal(content, document.getElementById("backdrop"));
}

export default SideDrawer;
