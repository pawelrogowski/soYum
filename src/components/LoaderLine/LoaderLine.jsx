import { loaderLineMotion } from "../../common/animations";
import { StyledSpan } from "./LoaderLine.styled";

export const LoaderLine = () => {
  return <StyledSpan {...loaderLineMotion} />;
};
