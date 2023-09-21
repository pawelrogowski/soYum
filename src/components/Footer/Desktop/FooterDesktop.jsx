import { Link } from "react-router-dom";
import { Logo } from "../../Logo/Logo";
import NavigationFooter from "../../NavigationFooter/NavigationFooter";
import SocialIcons from "../../SocialIcons/SocialIcons";
import Container from "../../Container/Container";
import { StyledFooter } from "./FooterDesktop.styled";
import { DescriptionFooter } from "../../DescriptionFooter/DescriptionFooter";
import { NewsletterForm } from "../../Forms/NewsletterForm/NewsletterForm";

export const FooterDesktop = () => {
  return (
    <StyledFooter>
      <Container as="div">
        <div>
          <Link to="/home">
            <Logo variant="footer" />
            <span>So Yummy</span>
          </Link>
          <NewsletterForm />
          <DescriptionFooter />
          <NavigationFooter />
        </div>
        <SocialIcons />
      </Container>
    </StyledFooter>
  );
};
