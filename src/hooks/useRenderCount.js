import { useEffect, useRef } from "react";

/**
 * Custom hook that tracks and logs the number of times a component renders.
 *
 * @returns {number} The current render count.
 */
export const useRenderCount = () => {
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current++;
    console.log(`Render count: ${renderCountRef.current}`);
  });

  return renderCountRef.current;
};
