import { useEffect } from "react";

/**
 * A custom React hook that disables scrolling on the body element and root div when called.
 * The overflow style is completely removed when the component that used this hook is unmounted.
 *
 * @example
 * ```jsx
 * import React from 'react';
 * import { useDisableBodyScroll } from './useDisableBodyScroll';
 *
 * const MyComponent = () => {
 *   useDisableBodyScroll();
 *
 *   return (
 *     <div>
 *       {...}
 *     </div>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */

export const useDisableBodyScroll = () => {
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.style.overflow = "hidden";
    }
    document.body.style.overflow = "hidden";
    return () => {
      if (rootElement) {
        rootElement.style.removeProperty("overflow");
      }
      document.body.style.removeProperty("overflow");
    };
  }, []);
};
