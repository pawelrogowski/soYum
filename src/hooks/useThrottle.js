import { useRef } from "react";

/**
 * A custom React hook that throttles a function execution to a specified delay.
 *
 * @param {function} func - The function to be throttled.
 * @param {number} delay - The delay in milliseconds.
 * @returns {function} The throttled function.
 */
export const useThrottle = (func, delay) => {
  // The last time the function was called.
  const lastCall = useRef(Date.now());

  // The throttled function.
  const throttledFunc = (...args) => {
    // The current time.
    const now = Date.now();

    // If the current time minus the last call time is greater than or equal to the delay,
    // call the function and update the last call time.
    if (now - lastCall.current >= delay) {
      func(...args);
      lastCall.current = now;
    }
  };

  return throttledFunc;
};
