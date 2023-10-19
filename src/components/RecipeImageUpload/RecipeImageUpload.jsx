import PropTypes from "prop-types";
import { useCallback, useState } from "react";

import placeholder from "../../assets/images/placeholder.png";
import useUploadWidget from "../../hooks/useUploadWidget";
import { cloudinarySettings } from "../Forms/UserUpdateForm/CloudinarySettings";
import { Icon } from "../Icon/Icon";
import { StyledButton } from "./RecipeImageUpload.styled";
export const RecipeImageUpload = ({ onImageUpload }) => {
  useUploadWidget();
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const handleImageUpload = useCallback(() => {
    window.cloudinary.openUploadWidget(cloudinarySettings, (error, result) => {
      if (!error && result && result.event === "success") {
        setUploadedImageUrl(result.info.secure_url);
        onImageUpload(result.info.secure_url);
      } else if (error) {
        console.log(error);
      }
    });
  }, [onImageUpload]);

  return (
    <StyledButton type="button" aria-label="upload an image" onClick={handleImageUpload}>
      <picture>
        <source srcSet={uploadedImageUrl} />
        <img src={placeholder} width="279px" height="268px" />
      </picture>
      {!uploadedImageUrl && <Icon icon="capture" />}
    </StyledButton>
  );
};

RecipeImageUpload.propTypes = {
  onImageUpload: PropTypes.func.isRequired,
};
