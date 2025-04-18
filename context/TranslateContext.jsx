import { useTranslation } from "react-i18next";

function TranslateProvider({ children }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.dir = lng === "ar" ? "rtl" : "ltr";
  };

  const valueToShare = {
    changeLanguage,
    t,
  };
  return (
    <translateContext.Provider value={valueToShare}>
      {children}
    </translateContext.Provider>
  );
}

export { TranslateProvider };
