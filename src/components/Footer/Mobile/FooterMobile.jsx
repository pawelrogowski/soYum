import { Link } from "react-router-dom";
import { Logo } from "../../Logo/Logo";
import NavigationFooter from "../../NavigationFooter/NavigationFooter";
import SocialIcons from "../../SocialIcons/SocialIcons";
import Container from "../../Container/Container";
import { StyledFooter } from "./FooterMobile.styled";

export const FooterMobile = () => {
  return (
    <StyledFooter>
      <Container as="div">
        <Link to="/home">
          <Logo variant="footer" />
          <span>So Yummy</span>
        </Link>
        <NavigationFooter />
        <SocialIcons />
      </Container>
    </StyledFooter>
  );
};
