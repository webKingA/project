import fetchClient from "./fetchClient";
import Swal from "sweetalert2";

interface typeEmail {
  email: string;
  id: number;
}
interface typePhone {
  phone: string;
  id: number;
}

export const updateEmailUser = async ({
  email,
  id,
}: typeEmail) => {
  const data = {
    id: Number(id),
    userName: "",
    firstName: "",
    lastName: "",
    email,
    dateOfBirth: "",
    isAdminEdit: null,
    phoneNumber: "",
  };
  try {
    const { data: update } = await fetchClient.post(
      "/UserProfile/updateuser",
      data
    );
    return Swal.fire({
      icon: "success",
      text: "ایمیل شما با موفقیت ویرایش شد",
    });
  } catch (error) {
    return Swal.fire({
      icon: "error",
      text: "مشکلی در ویرایش ایمیل شما پیش آمده است",
    });
  }
};

export const updatePhoneUser = async ({
  phone,
  id,
}: typePhone) => {
  const data = {
    id: Number(id),
    userName: phone,
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    isAdminEdit: true,
    phoneNumber: phone,
  };
  try {
    const { data: update } = await fetchClient.post(
      "/UserProfile/updateuser",
      data
    );
    return Swal.fire({
      icon: "success",
      text: "شماره تلفن شما با موفقیت ویرایش شد",
    });
  } catch (error) {
    return Swal.fire({
      icon: "error",
      text: "مشکلی در ویرایش شماره تلفن شما پیش آمده است",
    });
  }
};
