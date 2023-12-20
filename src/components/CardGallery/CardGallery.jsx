import PropTypes from "prop-types";

import placeholder from "../../assets/icons/food-placeholder.svg";
import { baseButtonMotion } from "../../common/animations.js";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Heading } from "../Heading/Heading.jsx";
import { Icon } from "../Icon/Icon.jsx";
import { StyledGallery } from "./CardGallery.styled";

export const CardGallery = ({
  data,
  limit = Infinity,
  showHeading = false,
  showButton = false,
  headingText = "your heading",
  buttonText = "your button",
  onButtonClick,
}) => {
  return (
    <StyledGallery>
      {showHeading && <Heading as="h2">{headingText}</Heading>}
      <ul>
        {data.slice(0, limit).map((item) => (
          <li key={item.recipe.id}>
            <Card
              itemId={item.recipe.id}
              img={item.recipe.image}
              caption={item.recipe.label}
              placeholder={placeholder}
            />
          </li>
        ))}
      </ul>
      {showButton && (
        <Button variant="outlineSmall" {...baseButtonMotion} onClick={onButtonClick}>
          {buttonText}
          <Icon icon="arrow_long" />
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
  onButtonClick: PropTypes.func,
};

export default CardGallery;
