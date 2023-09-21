import { Link } from "react-router-dom";
import { Logo } from "../../Logo/Logo";
import NavigationFooter from "../../NavigationFooter/NavigationFooter";
import SocialIcons from "../../SocialIcons/SocialIcons";
import Container from "../../Container/Container";
import { StyledFooter } from "./FooterTablet.styled";
import { DescriptionFooter } from "../../DescriptionFooter/DescriptionFooter";

export const FooterTablet = () => {
  return (
    <StyledFooter>
      <Container as="div">
        <div>
          <div>
            <Link to="/home">
              <Logo variant="footer" />
              <span>So Yummy</span>
            </Link>
            <DescriptionFooter />
          </div>
          <NavigationFooter />
        </div>
        <SocialIcons />
      </Container>
    </StyledFooter>
  );
};
