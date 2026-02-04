import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      let attempts = 0;

      const scrollAttempt = setInterval(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          clearInterval(scrollAttempt);
        }

        attempts++;
        if (attempts > 10) clearInterval(scrollAttempt); // Stop after 1 second (10 * 100ms)
      }, 100);

      return () => clearInterval(scrollAttempt);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
