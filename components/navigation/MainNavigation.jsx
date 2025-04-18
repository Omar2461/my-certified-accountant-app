import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Fragment } from "react";
import { GoGlobe } from "react-icons/go";

import SideDrawer from "./SideDrawer";
import BackDrop from "./BackDrop";
import NavLinks from "./NavLinks";

function MainNavigation() {
  const [sideDrawer, setSideDrawer] = useState(false);

  const { i18n, t } = useTranslation();

  const handleClick = () => {
    setSideDrawer(true);
  };

  const handleClose = () => {
    setSideDrawer(false);
  };

  const changeLanguageHandler = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.body.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const btn = i18n.language === "en" ? "English" : "Arabic";
  const sidePar = <SideDrawer isOpen={sideDrawer} />;

  return (
    <Fragment>
     {sideDrawer && <BackDrop onClose={handleClose} />}
  {sideDrawer && sidePar}
  <header className="bg-slate-700 h-[4rem] md:h-[7.5rem]">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      {/* First row for mobile menu and language button */}
      <div className="flex h-16 items-center justify-between md:hidden">
        <div className="flex-1"></div> {/* Empty spacer for balance */}
        <div className="flex items-center gap-4">
          <button
            onClick={changeLanguageHandler}
            className="flex items-center text-white hover:text-gray-300 transition-colors"
          >
            <GoGlobe className="mr-1" />
            {btn}
          </button>
          <button
            onClick={handleClick}
            className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Second row for desktop layout */}
      <div className="hidden md:flex md:items-center md:justify-between md:h-full">
        {/* Left spacer (same width as language button to balance the layout) */}
        <div className="w-24 flex justify-end">
          <button
            onClick={changeLanguageHandler}
            className="flex items-center text-white hover:text-gray-300 transition-colors"
          >
            <GoGlobe className="mr-1" />
            {btn}
          </button>
        </div>

        {/* Centered title and navigation */}
        <div className="flex-1 text-center">
          <h1 className="text-white font-bold text-[30px] pt-8 pb-2">
            {t("certifiedAccountant")}
          </h1>
          <nav aria-label="Global">
            <ul className="flex items-center justify-center text-white text-[15px] gap-6 text-sm">
              <NavLinks />
            </ul>
          </nav>
        </div>

        {/* Right spacer (same width as left spacer for symmetry) */}
        <div className="w-24"></div>
      </div>
    </div>
  </header>
    </Fragment>
  );
}
export default MainNavigation;
