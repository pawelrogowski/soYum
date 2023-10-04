import { Icon } from "../Icon/Icon";
import { StyledSection } from "./NotFound.styled";
export const NotFound = () => {
  return (
    <StyledSection>
      <Icon icon="404" /> <h1>We are sorry,</h1>
      <p>but the page you were looking for can’t be found..</p>
    </StyledSection>
  );
};
