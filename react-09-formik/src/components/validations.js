import { object, string, ref } from "yup";

// yazdigimiz schema altında bu inputlarin hangi kuralara uyması gerektiğini burada belirtmiş oluyoruz.

const validations = object({
  // name: string().required(),
  // age: number().required().positive().integer(),
  email: string().email().required(),
  password: string().min(5).required(),
  passwordConfirm: string()
    .oneOf([ref("password")])
    .required(),
  // website: string().url().nullable(),
  // createdOn: date().default(() => new Date()),
});

export default validations;
