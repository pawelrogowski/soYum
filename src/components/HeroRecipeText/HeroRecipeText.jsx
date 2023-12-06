import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { setSignInRedirectPatch } from "../../redux/slices/globalSlice";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./HeroRecipeText.styled";

export const HeroRecipeText = ({ id, title, about, cookingTime }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.user.name);
  const navigate = useNavigate();
  const handleButtonClick = (recipeId) => {
    if (isLoggedIn) {
      console.log(recipeId, "added to fav");
    } else {
      dispatch(setSignInRedirectPatch(location.pathname));
      navigate("/signin");
    }
  };

  return (
    <StyledDiv>
      <h1>{title}</h1>
      <p>{about}</p>

      <Button variant="outlineBig" onClick={() => handleButtonClick(id)}>
        {isLoggedIn ? "Add to favorite recipes" : "Sign In to favorite this recipe"}
      </Button>

      <div>
        <Icon icon="clock" />
        <span>{cookingTime}</span>
      </div>
    </StyledDiv>
  );
};

HeroRecipeText.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  cookingTime: PropTypes.string.isRequired,
};

export default HeroRecipeText;
