import { useContext } from "react";
import { navContext } from "../../context/NavContext";

import Link from "../Link";

function NavLinks({ clasNames }) {
  const { bages } = useContext(navContext);

  const navLinksRender = bages.map((bage) => {
    return (
      <li className={clasNames && clasNames} key={bage.name}>
        <Link to={bage.path}>{bage.name}</Link>
      </li>
    );
  });
  return [navLinksRender];
}
export default NavLinks;
