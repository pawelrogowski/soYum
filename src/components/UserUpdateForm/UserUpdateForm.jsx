import { Field, Formik } from "formik";
import { useCallback, useEffect, useRef, useState } from "react";

import avatar from "../../assets/images/avatar.webp";
import { userEditSchema } from "../../schemas/userEditSchema";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { cloudinarySettings } from "./CloudinarySettings";
import { StyledFormikForm } from "./UserUpdateForm.styled";

const initialValues = {
  avatar: "",
  username: "Current User Name",
};

export const UserUpdateForm = () => {
  const [usernameValue, setUsernameValue] = useState(initialValues.username);
  const [isUsernameEditable, setIsUsernameEditable] = useState(false);
  const usernameInputRef = useRef(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isUsernameEditable) {
      usernameInputRef.current.focus();
    }
  }, [isUsernameEditable]);

  const handleUsernameEdit = useCallback(() => {
    setIsUsernameEditable((prevIsUsernameEditable) => !prevIsUsernameEditable);
    if (!isUsernameEditable) {
      setTimeout(() => {
        usernameInputRef.current.focus();
      }, 0);
    }
  }, [isUsernameEditable]);

  const handleAvatarClick = useCallback(() => {
    window.cloudinary.openUploadWidget(cloudinarySettings, (error, result) => {
      if (!error && result && result.event === "success") {
        setAvatarPreview(result.info.secure_url);
        console.log(result.info.secure_url);
      } else if (error) {
        console.log(error);
      }
    });
  }, []);

  const handleSubmit = useCallback(
    (values, { setSubmitting }) => {
      const changedValues = {
        ...values,
        username: usernameValue,
      };

      if (avatarPreview === null) {
        delete changedValues.avatar;
      } else {
        changedValues.avatar = avatarPreview;
      }

      console.log(changedValues);

      setSubmitting(false);
    },
    [avatarPreview, usernameValue]
  );

  const resetUsername = useCallback(() => {
    setUsernameValue(initialValues.username);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userEditSchema}
      onSubmit={handleSubmit}
      validateOnMount
      validateOnBlur
      validateOnChange
    >
      {({ errors, values }) => (
        <StyledFormikForm>
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
              value={usernameValue}
              onChange={(e) => setUsernameValue(e.target.value)}
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
                onClick={() => {
                  handleUsernameEdit();
                  resetUsername();
                }}
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
      )}
    </Formik>
  );
};
