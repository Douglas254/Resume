import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().min(3).required("Please enter your name."),
  message: Yup.string().min(13).required("Please enter your message."),
  email: Yup.string()
    .email("Please enter valid email.")
    .required("Please enter your email."),
});
