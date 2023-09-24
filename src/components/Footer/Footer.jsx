import { StyledFooter } from "./Footer.styled";
import { Container } from "../Container/Container";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { NavigationFooter } from "../NavigationFooter/NavigationFooter";
import { DescriptionFooter } from "../DescriptionFooter/DescriptionFooter";
import { NewsletterForm } from "../Forms/NewsletterForm/NewsletterForm";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { LegalDisclaimer } from "../LegalDisclaimer/LegalDisclaimer";
import PropTypes from "prop-types";

const Footer = ({ variant }) => {
  return (
    <StyledFooter $variant={variant}>
      <Container as="div">
        {variant === "mobile" ? (
          <>
            <Link to="/home">
              <Logo variant="footer" />
              <span>So Yummy</span>
            </Link>
            <NavigationFooter />
          </>
        ) : variant === "tablet" ? (
          <>
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
            <NewsletterForm />
          </>
        ) : (
          <>
            <div>
              <div>
                <Link to="/home">
                  <Logo variant="footer" />
                  <span>So Yummy</span>
                </Link>
                <DescriptionFooter />
              </div>
              <NavigationFooter />

              <NewsletterForm layout="column" />
            </div>
          </>
        )}
        <SocialIcons />
      </Container>
      <LegalDisclaimer>asdasd</LegalDisclaimer>
    </StyledFooter>
  );
};

export default Footer;

Footer.propTypes = {
  variant: PropTypes.string.isRequired,
};
