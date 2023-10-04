import { useEffect, useRef } from "react";

/**
 * A custom hook that enables horizontal scrolling on the element it is applied to.
 * The scroll amount is set to 70% of the viewport's width.
 * @returns {object} - A ref to be applied to the element you want to have horizontal scrolling.
 */
export const useHorizontalScroll = () => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    const handleWheel = (e) => {
      if (element) {
        const scrollAmount = window.innerWidth * 0.7;
        element.scrollLeft += e.deltaY > 0 ? scrollAmount : -scrollAmount;
        e.preventDefault();
      }
    };

    element.addEventListener("wheel", handleWheel);
    return () => element.removeEventListener("wheel", handleWheel);
  }, []);

  return ref;
};
