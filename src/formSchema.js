
import * as yup from "yup";

export default yup.object().shape({
    
  name: yup
    .string()
    .required("Full Name is required")
    .min(2, "name must be at least 2 characters"),

  size: yup
    .string()
    .oneOf(["small", "medium", "large"], "size is required"),

  choice: yup
    .string()
    .oneOf(["Original Red", "Garlic Ranch", "BQ Sauce", "Spinach Alfredo"], "Choice of Sauce is required"),

  pepper: yup
    .boolean(),
  sausage: yup
    .boolean(),
    cbacon: yup
    .boolean(),
  spicy: yup
    .boolean(),
  grilled: yup
    .boolean(),

  special: yup
    .string()
    .max(150, "You have exceeded 150 chars"),
});