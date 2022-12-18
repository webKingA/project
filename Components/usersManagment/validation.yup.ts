import * as yup from "yup";

export const userCreateSchema = yup.object().shape({
    email:  yup.string().required("این فیلد ضروری است"),
  firstName:  yup.string().required("این فیلد ضروری است"),
  lastName: yup.string().required("این فیلد ضروری است"),
  phoneNumber: yup.string().matches(/^(\+?98[-\s]?|0){0,1}9[0-39]\d[-\s]?\d{3}[-\s]?\d{4}$/,"شماره نامعتبر").required("این فیلد ضروری است"),
  userName: yup.string().required("این فیلد ضروری است"),
  password: yup.string().min(8, 'حداقل طول پسورد 8 کاراکتر است').matches(
	/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
	"پسورد باید 8 کاراکتر ( شامل حروف کوچک و بزرگ و کاراکتر خاص ) باشد"
).required('این فیلد ضروریست'),
  confirmPassword: yup.string()
     .oneOf([yup.ref('password'), null], 'پسورد و تکرار آن یکسان نیست')
}).required();


export const searchSchema = yup.object().shape({
	isPartOfEmail:yup.boolean(),
	isUserId:yup.boolean(),
	isPartOfName:yup.boolean(),
	isPartOfLastName:yup.boolean(),
	isPartOfUserName:yup.boolean(),
	textToFind: yup.string().when(['isPartOfEmail','isUserId','isPartOfName','isPartOfLastName','isPartOfUserName'], {
        is: (isPartOfEmail: any , isUserId: any , isPartOfName: any , isPartOfLastName: any , isPartOfUserNam: any) =>
		
		isPartOfEmail || isUserId || isPartOfName || isPartOfLastName || isPartOfUserNam,
        then: yup.string().trim()
          .required("این فیلد ضروری است"),
      }).nullable(),
}).required();




export const aclSchema = yup.object().shape({}).required();