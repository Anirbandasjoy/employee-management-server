import * as yup from "yup";

// Exployee added schema

export const EmployeeSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  phone: yup.string().required(),
  address: yup.string().required(),
  designation: yup.string().required(),
  role: yup.string().required(),
});
