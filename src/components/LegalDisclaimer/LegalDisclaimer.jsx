import Container from "../Container/Container.jsx";
import { StyledDiv } from "./LegalDisclaimer.styled.js";
import { Link } from "react-router-dom";
export const LegalDisclaimer = () => {
  return (
    <StyledDiv as="div">
      <Container as="div">
        <span>&copy; 2023 All Rights Reserved.</span>
        <Link to="#">
          <span>Terms of Service</span>
        </Link>
      </Container>
    </StyledDiv>
  );
};
