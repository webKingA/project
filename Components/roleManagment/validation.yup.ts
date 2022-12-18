import * as yup from "yup";

export const aclSchema = yup.object().shape({
  name: yup.string().required("لطفا  نام نقش را وارد کنید."),

}).required();
