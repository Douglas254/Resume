import { useEffect } from "react";
import { useLocation } from "react-router";

// makes the pages scroll to top when navigating through them
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
