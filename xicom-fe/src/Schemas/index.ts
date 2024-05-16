import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be at most 50 characters"),
  last_name: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be at most 50 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  dob: Yup.date().required("Date of Birth is required"),
  residential_address_one: Yup.string().required(
    "Residential address is required"
  ),
  residential_address_two: Yup.string().required(
    "Residential address is required"
  ),
  permanent_address_one: Yup.string(),
  permanent_address_two: Yup.string(),
  documents: Yup.array().of(
    Yup.object().shape({
      file_name: Yup.string(),
      file_type: Yup.string(),
      file: Yup.mixed(),
    })
  ),
});
