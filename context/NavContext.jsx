import { useState, useEffect, createContext } from "react";

const navContext = createContext();
function NavProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const navBages = [
    { name: "Home", path: "/" },
    { name: "About", path: "AboutPage" },
    { name: "Services", path: "Services" },
    { name: "Testimonials", path: "Testimonials" },
    { name: "Contact", path: "Contact" },
  ];
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (newPath) => {
    window.history.pushState({}, "", newPath);
    setCurrentPath(newPath);
  };
  const valueToShare = {
    currentPath,
    navigate,
    bages: navBages,
  };
  return (
    <navContext.Provider value={valueToShare}>{children}</navContext.Provider>
  );
}

export { navContext, NavProvider };
