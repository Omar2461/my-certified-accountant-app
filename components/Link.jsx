import { useContext } from "react";
import { navContext } from "../context/NavContext";
import { useTranslation } from "react-i18next";

function Link({ to, children }) {
  const { navigate } = useContext(navContext);

  const { t } = useTranslation();

  return (
    <a
      className="hover:text-gray-500/75 cursor-pointer text-[17px]"
      onClick={() => {
        navigate(to);
      }}
    >
      {t(`${children}`)}
    </a>
  );
}
export default Link;
