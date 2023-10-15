import { Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";

import avatar from "../../assets/images/avatar.webp";

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

  const handleUsernameEdit = () => {
    setIsUsernameEditable(!isUsernameEditable);
  };

  const handleAvatarClick = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dd9oa9bwd",
        uploadPreset: "so-yummy",
        sources: ["local", "url", "camera"],
        cropping: true,
        multiple: false,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#F5F5F5",
            sourceBg: "#FFFFFF",
            windowBorder: "#90A0B3",
            tabIcon: "#0094C7",
            inactiveTabIcon: "#69778A",
            menuIcons: "#0094C7",
            link: "#53ad9d",
            action: "#8F5DA5",
            inProgress: "#0194c7",
            complete: "#53ad9d",
            error: "#c43737",
            textDark: "#000000",
            textLight: "#FFFFFF",
          },
          fonts: {
            default: null,
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
        console.log(errors.username);
        return (
          <Form>
            <label htmlFor="avatar" />
            <picture>
              <source srcSet={avatarPreview || avatar} />
              <img
                src={avatarPreview || avatar}
                width="50px"
                onClick={handleAvatarClick}
              />
            </picture>

            <label htmlFor="username" />
            <div>
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
                  <button type="button" onClick={handleUsernameEdit}>
                    Confirm
                  </button>
                )}
              <button type="button" onClick={handleUsernameEdit}>
                {isUsernameEditable ? "Cancel" : "Edit Username"}
              </button>
            </div>

            <button type="submit" disabled={isUsernameEditable}>
              Save Changes
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
