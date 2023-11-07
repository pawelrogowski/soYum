import { useEffect } from "react";

const usePreloadOnHover = (links) => {
  useEffect(() => {
    const preloadLink = (event) => {
      const href = event.target.getAttribute("href");
      const link = links.find((link) => link.to === href);
      if (link && link.component) {
        import(`../pages/${link.component}/${link.component}`);
      }
    };

    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          const anchors = document.querySelectorAll("a");
          anchors.forEach((anchor) => {
            anchor.addEventListener("mouseover", preloadLink);
          });
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      const anchors = document.querySelectorAll("a");
      anchors.forEach((anchor) => {
        anchor.removeEventListener("mouseover", preloadLink);
      });
    };
  }, [links]);
};

export default usePreloadOnHover;
