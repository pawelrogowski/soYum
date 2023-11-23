import { useRef } from "react";

/**
 * A custom React hook that debounces a function call to a specified delay.
 *
 * @param {function} func - The function to be debounced.
 * @param {number} delay - The delay in milliseconds.
 * @returns {function} The debounced function.
 */
export const useDebounce = (func, delay) => {
  const handler = useRef(null);

  const debouncedFunc = (...args) => {
    if (handler.current) {
      clearTimeout(handler.current);
    }

    handler.current = setTimeout(() => {
      func(...args);
    }, delay);
  };

  return debouncedFunc;
};
