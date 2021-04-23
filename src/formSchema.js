
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
    .oneOf(["original_red", "garlic_ranch", "bbq_sauce", "spinach_alfredo"], "Choice of Sauce is required"),

  topping1: yup
    .boolean(),
  topping2: yup
    .boolean(),
  topping3: yup
    .boolean(),
  topping4: yup
    .boolean(),
  topping5: yup
    .boolean(),

  special: yup
    .string()
    .max(150, "You have exceeded 150 chars"),
});