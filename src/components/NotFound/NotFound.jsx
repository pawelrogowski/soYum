import { Icon } from "../Icon/Icon";
import { StyledMain } from "./NotFound.styled";
export const NotFound = () => {
  return (
    <StyledMain>
      <h1>We are sorry,</h1>
      <p>but the page you were looking for can’t be found..</p>
      <Icon icon="404" />
    </StyledMain>
  );
};
