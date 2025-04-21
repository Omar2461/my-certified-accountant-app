import { useContext } from "react";
import { navContext } from "../context/NavContext";
import { useTranslation } from "react-i18next";

function Link({ to, children, className }) {
  const { navigate } = useContext(navContext);

  const { t } = useTranslation();

  const handleClick = (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }

    event.preventDefault();

    navigate(to);
  };

  return (
    <a
      href={to}
      className={`hover:text-gray-500/75 cursor-pointer text-[17px] ${
        className ? className : ""
      }`}
      onClick={handleClick}
    >
      {t(`${children}`)}
    </a>
  );
}
export default Link;
