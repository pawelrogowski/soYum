import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Container,
  DescriptionFooter,
  LegalDisclaimer,
  Logo,
  NavigationFooter,
  SocialIcons,
} from "..";
import { NewsletterForm } from "../Forms/NewsletterForm/NewsletterForm";
import { StyledFooter } from "./Footer.styled";

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
            <NavigationFooter /> <NewsletterForm layout="column" />
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
      <LegalDisclaimer />
    </StyledFooter>
  );
};

Footer.propTypes = {
  variant: PropTypes.string.isRequired,
};

export default Footer;
