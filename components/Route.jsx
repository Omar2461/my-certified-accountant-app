import { useContext } from "react";
import { navContext } from "../context/NavContext";

function Route({ path, children }) {
  const { currentPath } = useContext(navContext);
  if (path === currentPath) {
    return <div>{children}</div>;
  } else {
    return;
  }
}
export default Route;
