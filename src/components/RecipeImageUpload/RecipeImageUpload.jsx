import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import placeholder from "../../assets/images/transparent.avif";
import { getCloudinarySettings } from "../../common/CloudinarySettings";
import useUploadWidget from "../../hooks/useUploadWidget";
import { setField } from "../../redux/slices/addRecipeFormSlice";
import { Icon } from "../Icon/Icon";
import { StyledButton } from "./RecipeImageUpload.styled";

export const RecipeImageUpload = () => {
  useUploadWidget();
  const { isDarkTheme } = useSelector((state) => state.global);
  const { recipeImageUrl } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();

  const handleImageUpload = useCallback(() => {
    window.cloudinary.openUploadWidget(
      getCloudinarySettings(isDarkTheme, true),
      (error, result) => {
        if (!error && result && result.event === "success") {
          dispatch(setField({ field: "recipeImageUrl", value: result.info.secure_url }));
        } else if (error) {
          console.log(error);
        }
      }
    );
  }, [dispatch, isDarkTheme]);

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
