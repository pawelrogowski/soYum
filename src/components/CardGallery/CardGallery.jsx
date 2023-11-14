import PropTypes from "prop-types";

import { baseButtonMotion } from "../../common/animations.js";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Heading } from "../Heading/Heading.jsx";
import { StyledGallery } from "./CardGallery.styled";

export const CardGallery = ({
  data,
  limit = Infinity,
  showHeading = false,
  showButton = false,
  headingText = "your heading",
  buttonText = "your button",
}) => {
  return (
    <StyledGallery>
      {showHeading && <Heading as="h2">{headingText}</Heading>}
      <ul>
        {data.slice(0, limit).map((item) => (
          <li key={item.id}>
            <Card
              itemId={item.id}
              img={item.img}
              caption={item.caption}
              placeholder={item.placeholder}
            />
          </li>
        ))}
      </ul>
      {showButton && (
        <Button variant="rectSmall" {...baseButtonMotion}>
          {buttonText}
        </Button>
      )}
    </StyledGallery>
  );
};

CardGallery.propTypes = {
  data: PropTypes.array.isRequired,
  limit: PropTypes.number,
  headingText: PropTypes.string,
  buttonText: PropTypes.string,
  showHeading: PropTypes.bool,
  showButton: PropTypes.bool,
};
