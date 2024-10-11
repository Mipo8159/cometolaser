import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname;

    if (window.dataLayer && pagePath) {
      window.dataLayer.push({
        event: "pageview",
        page_path: pagePath,
      });
    }
  }, [location]);
};

export default useTrackPageView;
