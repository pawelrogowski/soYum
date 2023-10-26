import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import placeholder from "../../assets/images/placeholder.png";
import useUploadWidget from "../../hooks/useUploadWidget";
import { setRecipeImageUrl } from "../../redux/slices/addRecipeFormSlice";
import { cloudinarySettings } from "../Forms/UserUpdateForm/CloudinarySettings";
import { Icon } from "../Icon/Icon";
import { StyledButton } from "./RecipeImageUpload.styled";

export const RecipeImageUpload = () => {
  useUploadWidget();
  const { recipeImageUrl } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();

  const handleImageUpload = useCallback(() => {
    window.cloudinary.openUploadWidget(cloudinarySettings, (error, result) => {
      if (!error && result && result.event === "success") {
        dispatch(setRecipeImageUrl(result.info.secure_url));
      } else if (error) {
        console.log(error);
      }
    });
  }, [dispatch]);

  return (
    <StyledButton type="button" aria-label="upload an image" onClick={handleImageUpload}>
      <picture>
        <source srcSet={recipeImageUrl} />
        <img src={placeholder} width="279px" height="268px" alt="your recipe image" />
      </picture>
      {!recipeImageUrl && <Icon icon="capture" />}
    </StyledButton>
  );
};
