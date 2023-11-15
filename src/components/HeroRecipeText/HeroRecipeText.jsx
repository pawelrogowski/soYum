import PropTypes from "prop-types";

import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./HeroRecipeText.styled";
export const HeroRecipeText = ({ title, about, cookingTime }) => {
  return (
    <StyledDiv>
      <h1>{title}</h1>
      <p>{about}</p>
      <Button variant="outlineBig">Add to favorite recipes</Button>
      <div>
        <Icon icon="clock" />
        <span>{cookingTime}</span>
      </div>
    </StyledDiv>
  );
};

HeroRecipeText.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  cookingTime: PropTypes.string.isRequired,
};
