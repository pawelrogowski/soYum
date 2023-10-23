import { debounce } from "lodash";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { setRecipeAbout, setRecipeTitle } from "../../redux/slices/addRecipeFormSlice";
import { StyledLabel } from "./RecipeTextInput.styled";

export const RecipeTextInput = ({ name, placeholder }) => {
  const dispatch = useDispatch();

  const handleChange = debounce((value) => {
    if (name === "recipe title") {
      dispatch(setRecipeTitle(value));
    } else if (name === "recipe about") {
      dispatch(setRecipeAbout(value));
    }
  }, 200);

  const handleInputChange = (e) => {
    const { value } = e.target;
    handleChange(value);
  };

  return (
    <StyledLabel htmlFor={name}>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </StyledLabel>
  );
};

RecipeTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
