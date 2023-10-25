import * as Yup from "yup";

export const userEditSchema = Yup.object().shape({
  username: Yup.string("User name must be a string").min(
    3,
    "User name must be at least 3 characters"
  ),
});
