import { object, string } from "yup";

export const userEditSchema = object().shape({
  username: string("User name must be a string").min(3, "User name must be at least 3 characters"),
});
