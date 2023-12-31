import { Field, Formik } from "formik";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import avatar from "../../../assets/images/avatar.avif";
import { baseButtonMotion, baseIconMotion } from "../../../common/animations";
import { getCloudinarySettings } from "../../../common/CloudinarySettings";
import { useDisableBodyScroll } from "../../../hooks/useDisableBodyScroll";
import useUploadWidget from "../../../hooks/useUploadWidget";
import { updateAvatar, updateName } from "../../../redux/api/userAPI";
import {
  setIsImageUploadModalLoading,
  setIsImageUploadModalOpen,
  setIsProfileUpdateMenuOpen,
} from "../../../redux/slices/modalSlice";
import { setUser } from "../../../redux/slices/userSlice";
import { userEditSchema } from "../../../validation/userEditSchema";
import { Button } from "../../Button/Button";
import { Icon } from "../../Icon/Icon";
import { StyledFormikForm } from "./UserUpdateForm.styled";

export const UserUpdateForm = () => {
  const { isDarkTheme } = useSelector((state) => state.global);
  useUploadWidget();
  useDisableBodyScroll();
  const user = useSelector((state) => state.user.user);
  const initialValues = {
    avatar: user.avatarUrl || "",
    username: user.name || "Current User Name",
  };
  const { isImageUploadModalOpen, isImageUploadModalLoading } = useSelector((state) => state.modal);
  const [usernameValue, setUsernameValue] = useState(initialValues.username);
  const [isUsernameEditable, setIsUsernameEditable] = useState(false);
  const usernameInputRef = useRef(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setUsernameValue(user.name || "Current User Name");
    setAvatarPreview(user.avatarUrl || "");
  }, [user.name, user.avatarUrl]);

  useEffect(() => {
    if (isUsernameEditable) {
      usernameInputRef.current.focus();
    }
    if (isImageUploadModalOpen) {
      dispatch(setIsImageUploadModalLoading(false));
    }
  }, [isUsernameEditable, isImageUploadModalOpen, dispatch]);

  const handleUsernameEdit = useCallback(() => {
    setIsUsernameEditable((prevIsUsernameEditable) => !prevIsUsernameEditable);
    if (!isUsernameEditable) {
      setTimeout(() => {
        usernameInputRef.current.focus();
      }, 0);
    }
  }, [isUsernameEditable]);

  const widget = useCallback(() => {
    return window.cloudinary.createUploadWidget(
      getCloudinarySettings(isDarkTheme, false),
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
          setAvatarPreview(result.info.secure_url);
        } else if (error) {
          dispatch(setIsImageUploadModalOpen(false));
          console.log(error);
        }
      }
    );
  }, [dispatch, isDarkTheme]);

  const handleAvatarClick = () => {
    const { open: openWidget } = widget();
    !isImageUploadModalLoading && openWidget();
    dispatch(setIsImageUploadModalLoading(true));
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const changedValues = {
      ...values,
      username: usernameValue,
    };

    if (avatarPreview === null) {
      delete changedValues.avatar;
    } else {
      changedValues.avatar = avatarPreview;
    }

    if (changedValues.username !== initialValues.username) {
      const updateNameResult = await dispatch(updateName({ name: changedValues.username }));

      if (updateNameResult.type === updateName.fulfilled.type) {
        dispatch(setUser({ ...user, name: changedValues.username }));
      }
    }

    if (changedValues.avatar !== initialValues.avatar) {
      const updateAvatarResult = await dispatch(updateAvatar({ avatarUrl: changedValues.avatar }));

      if (updateAvatarResult.type === updateAvatar.fulfilled.type) {
        dispatch(setUser({ ...user, avatarUrl: changedValues.avatar }));
      }
    }

    setSubmitting(false);
    dispatch(setIsProfileUpdateMenuOpen(false));
  };

  const resetUsername = () => {
    setUsernameValue(initialValues.username);
  };

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
                loading="eager"
                onClick={handleAvatarClick}
              />
            </picture>
            <button type="button" onClick={handleAvatarClick}>
              <Icon icon="plus" {...baseIconMotion} />
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
              autoComplete="off"
            />
            {isUsernameEditable && !errors.username && values.username !== "" && (
              <button
                className="confirm-username-button"
                type="button"
                onClick={handleUsernameEdit}
              >
                <Icon icon="checkbox" {...baseIconMotion} />
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
                <Icon icon="x" {...baseIconMotion} />
              </button>
            ) : (
              <button className="edit-username-button" type="button" onClick={handleUsernameEdit}>
                <Icon icon="edit" {...baseIconMotion} />
              </button>
            )}

            <Button
              type="submit"
              variant="rectBig"
              disabled={isUsernameEditable}
              {...baseButtonMotion}
            >
              Save Changes
            </Button>
          </div>
        </StyledFormikForm>
      )}
    </Formik>
  );
};
