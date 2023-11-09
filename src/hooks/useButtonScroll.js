import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";

/**
 * Hook that enables horizontal scrolling of an element with buttons.
 *
 * @param {React.RefObject} buttonScrollTarget - The ref of the element to be scrolled.
 *
 * @returns {Object} An object containing:
 * - scrollLeft: A function that scrolls the element to the left by a given offset.
 * - scrollRight: A function that scrolls the element to the right by a given offset.
 * - isAtLeft: A boolean indicating whether the element is scrolled all the way to the left.
 * - isAtRight: A boolean indicating whether the element is scrolled all the way to the right.
 *
 * @example
 * ```js
 * const scrollRef = useRef();
 * const { scrollLeft, scrollRight, isAtLeft, isAtRight } = useButtonScroll(scrollRef);
 * const buttonScrollOffset = 200;
 *
 * return (
 *   <div>
 *     <button onClick={() => scrollLeft(buttonScrollOffset)} disabled={isAtLeft}>Scroll Left</button>
 *     <div ref={scrollRef}>Your scrollable content here</div>
 *     <button onClick={() => scrollRight(buttonScrollOffset)} disabled={isAtRight}>Scroll Right</button>
 *   </div>
 * );
 * ```
 */
export const useButtonScroll = (buttonScrollTarget) => {
  const [isAtLeft, setIsAtLeft] = useState(true);
  const [isAtRight, setIsAtRight] = useState(false);

  const checkScrollPosition = useCallback(() => {
    const debouncedFunction = debounce(() => {
      const scrollPos = buttonScrollTarget.current.scrollLeft;
      setIsAtLeft(scrollPos < 1);
      setIsAtRight(
        scrollPos + buttonScrollTarget.current.offsetWidth >= buttonScrollTarget.current.scrollWidth
      );
    }, 200);
    debouncedFunction();
  }, [buttonScrollTarget]);

  useEffect(() => {
    const element = buttonScrollTarget.current;

    element.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    checkScrollPosition();

    return () => {
      element.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [buttonScrollTarget, checkScrollPosition]);

  const scrollLeft = (scrollOffset) => {
    buttonScrollTarget.current.scrollLeft -= scrollOffset;
  };

  const scrollRight = (scrollOffset) => {
    buttonScrollTarget.current.scrollLeft += scrollOffset;
  };

  return { scrollLeft, scrollRight, isAtLeft, isAtRight };
};
