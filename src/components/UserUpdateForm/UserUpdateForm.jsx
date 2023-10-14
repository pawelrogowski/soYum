import { FastField, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export const UserUpdateForm = () => {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [isUsernameEditable, setIsUsernameEditable] = useState(false);

  const handleFileChange = (event) => {
    if (event.currentTarget.files.length > 0) {
      const file = URL.createObjectURL(event.currentTarget.files[0]);
      setAvatarPreview(file);
    }
  };

  const handleUsernameEdit = () => {
    setIsUsernameEditable(true);
  };

  const validationSchema = Yup.object().shape({
    avatar: Yup.mixed().required("Avatar is required"),
    username: Yup.string().required("Username is required"),
  });

  return (
    <Formik
      initialValues={{ avatar: "", username: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        const { avatar, username } = values;
        if (avatar && username) {
          console.log("Both avatar and username changed");
          // Submit both avatar and username changes
        } else if (avatar) {
          console.log("Only avatar changed");
          // Submit avatar change
        } else if (username) {
          console.log("Only username changed");
          // Submit username change
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <label htmlFor="avatar">
            <img src={avatarPreview} alt="Avatar" />
            <FastField
              id="avatar"
              name="avatar"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            {errors.avatar && touched.avatar && <div>{errors.avatar}</div>}
          </label>

          <button type="button" onClick={handleUsernameEdit}>
            Edit Username
          </button>

          {isUsernameEditable ? (
            <div>
              <FastField
                id="username"
                name="username"
                type="text"
                disabled={!isUsernameEditable}
              />
              {errors.username && touched.username && (
                <div>{errors.username}</div>
              )}
            </div>
          ) : (
            <div>{/* Display current username */}</div>
          )}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
