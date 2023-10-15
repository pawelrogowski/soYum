import { Field, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import * as Yup from "yup";

import avatar from "../../assets/images/avatar.webp";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { StyledFormikForm } from "./UserUpdateForm.styled";

const validationSchema = Yup.object().shape({
  username: Yup.string("User name must be a string").min(
    3,
    "User name must be at least 3 characters"
  ),
});

const initialValues = {
  avatar: "",
  username: "Current User Name",
};

export const UserUpdateForm = () => {
  const [isUsernameEditable, setIsUsernameEditable] = useState(false);
  const usernameInputRef = useRef(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleUsernameEdit = () => {
    setIsUsernameEditable(!isUsernameEditable);
  };

  const handleAvatarClick = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dd9oa9bwd",
        uploadPreset: "so-yummy",
        sources: ["local", "url", "camera"],
        cropping: false,
        multiple: false,
        defaultSource: "local",
        eager: [{ width: 44, height: 44, crop: "scale", format: "webp" }],
        styles: {
          palette: {
            window: "#fafafa",
            sourceBg: "#fafafa",
            windowBorder: "lightgrey",
            tabIcon: "#8BAA36",
            inactiveTabIcon: "lightgray",
            menuIcons: "#8BAA36",
            link: "#8BAA36",
            action: "#8BAA36",
            inProgress: "#8BAA36",
            complete: "#53ad9d",
            error: "#c43737",
            textDark: "#000",
            textLight: "#000",
          },
          fonts: {
            default: "Poppins",
            "'Poppins'": {
              url: "../../assets/fonts/Poppins-Regular.woff2",
              active: true,
            },
          },
        },
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setAvatarPreview(result.info.secure_url);
          console.log(result.info.secure_url);
        } else if (error) {
          console.log(error);
        }
      }
    );
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const changedValues = Object.keys(values).reduce((acc, key) => {
      if (values[key] !== initialValues[key]) {
        acc[key] = values[key];
      }
      return acc;
    }, {});

    changedValues.avatar = avatarPreview;

    console.log(changedValues);

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnMount
      validateOnBlur
      validateOnChange
    >
      {({ errors, values }) => {
        return (
          <StyledFormikForm>
            <label htmlFor="avatar" />
            <div>
              <picture>
                <source srcSet={avatarPreview || avatar} />
                <img
                  src={avatarPreview || avatar}
                  width="88px"
                  onClick={handleAvatarClick}
                />
              </picture>
              <button type="button" onClick={handleAvatarClick}>
                <Icon icon="plus" />
              </button>
            </div>
            <label htmlFor="username" />
            <div>
              <Icon icon="user" />
              <Field
                id="username"
                name="username"
                type="text"
                disabled={!isUsernameEditable}
                placeholder="Current Username"
                innerRef={usernameInputRef}
              />
              {isUsernameEditable &&
                !errors.username &&
                values.username !== "" && (
                  <button
                    className="confirm-username-button"
                    type="button"
                    onClick={handleUsernameEdit}
                  >
                    <Icon icon="checkbox" />
                  </button>
                )}
              {isUsernameEditable ? (
                <button
                  className="edit-username-button--cancel"
                  type="button"
                  onClick={handleUsernameEdit}
                >
                  <Icon icon="x" />
                </button>
              ) : (
                <button
                  className="edit-username-button"
                  type="button"
                  onClick={handleUsernameEdit}
                >
                  <Icon icon="edit" />
                </button>
              )}

              <Button
                type="submit"
                variant="rectBig"
                disabled={isUsernameEditable}
              >
                Save Changes
              </Button>
            </div>
          </StyledFormikForm>
        );
      }}
    </Formik>
  );
};
