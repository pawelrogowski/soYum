import { Link } from "react-router-dom";

import { Container } from "..";
import { StyledDiv } from "./LegalDisclaimer.styled.js";
export const LegalDisclaimer = () => {
  return (
    <StyledDiv as="div">
      <Container as="div">
        <span>&copy; 2023 All Rights Reserved.</span>
        <Link to="/tos">
          <span>Terms of Service</span>
        </Link>
      </Container>
    </StyledDiv>
  );
};

export default LegalDisclaimer;
