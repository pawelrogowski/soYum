import { useEffect } from "react";

const baseTitle = "SoYummy";
const separator = "—";

export const usePageTitle = (subTitle) => {
  useEffect(() => {
    document.title = `${subTitle} ${separator} ${baseTitle}`;
  }, [subTitle]);
};
