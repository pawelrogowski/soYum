import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import placeholder from "../../assets/images/transparent.avif";
import { getCloudinarySettings } from "../../common/CloudinarySettings";
import useUploadWidget from "../../hooks/useUploadWidget";
import { setField } from "../../redux/slices/addRecipeFormSlice";
import {
  setIsImageUploadModalLoading,
  setIsImageUploadModalOpen,
} from "../../redux/slices/modalSlice";
import { Icon } from "..";
import { StyledButton } from "./RecipeImageUpload.styled";

export const RecipeImageUpload = () => {
  useUploadWidget();
  const { isImageUploadModalLoading, isImageUploadModalOpen } = useSelector((state) => state.modal);
  const { isDarkTheme } = useSelector((state) => state.global);
  const { recipeImageUrl } = useSelector((state) => state.addRecipeForm);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isImageUploadModalOpen) {
      dispatch(setIsImageUploadModalLoading(false));
    }
    if (isImageUploadModalLoading) {
      dispatch(setIsImageUploadModalOpen(false));
    }
  }, [isImageUploadModalOpen, isImageUploadModalLoading, dispatch]);

  const widget = useCallback(() => {
    return window.cloudinary.createUploadWidget(
      getCloudinarySettings(isDarkTheme, true),
      (error, result) => {
        if (result.info === "shown") {
          dispatch(setIsImageUploadModalOpen(true));
        }

        if (result.event === "close") {
          const widgetInstance = widget();
          widgetInstance.destroy();
          dispatch(setIsImageUploadModalOpen(false));
        }

        if (!error && result.event === "success") {
          dispatch(setField({ field: "recipeImageUrl", value: result.info.secure_url }));
          dispatch(setIsImageUploadModalOpen(false));
        } else if (error) {
          dispatch(setIsImageUploadModalOpen(false));
          console.log(error);
        }
      }
    );
  }, [dispatch, isDarkTheme]);

  const handleImageUpload = () => {
    const { open: openWidget } = widget();
    !isImageUploadModalLoading && openWidget();
    dispatch(setIsImageUploadModalLoading(true));
  };

  return (
    <StyledButton type="button" aria-label="upload an image" onClick={handleImageUpload}>
      <picture>
        <source srcSet={recipeImageUrl} />
        <img src={placeholder} width="279px" height="268px" alt="your recipe image" />
      </picture>
      {!recipeImageUrl && !isImageUploadModalLoading ? (
        <Icon icon="capture" />
      ) : (
        !recipeImageUrl && <span />
      )}
    </StyledButton>
  );
};

export default RecipeImageUpload;
