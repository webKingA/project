import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { aclSchema } from "./validation.yup";

import { IUser } from "../../interface/users.interface";
import useEditUser from "../../hooks/userMangment/useEditUser";
import { PencilIcon, XIcon } from "../../public/svg";

interface IProps {
   userInfo: IUser
}

interface IForm{
	userName: string;
	firstName: string;
	lastName: string;
	email: string;
	// "dateOfBirth": "string",
	// "isAdminEdit": true,
	phoneNumber: string
}

const UserEdit = (props: IProps) => {
  const [open, setOpen] = useState(false);
  const { userInfo } = props;

  // -------------------- HOOKS --------------------
const editUser = useEditUser();
  const form = useForm<IForm>({
    resolver: yupResolver(aclSchema),
  });

  const {
    register,
    handleSubmit,
    formState,
    reset,
    clearErrors,
  } = form;
  const { errors } = formState;

  const handleClose = () => {
    setOpen(!open);
    reset();
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleReset = () => {
    reset();
    clearErrors();
  };

  const onSubmit = async (data: IForm) => {
	let temp={...data,id:userInfo.id}
    editUser.mutate({
      ...temp,
      callBack: (res:any) => {
		if(res){
			for(let i=0;i<res.length;i++){
				toast.error(res[i]);
				console.log("------------------->>>>",res[i])
			}
		}else{
        toast.success("با موفقیت ثبت شد.");
        handleOpen();
        handleReset();
		}
      },
    });
  };

  return (
    <div className="edit-user-dialog dialog-content border-2 border-[#7446B2] rounded-[4px]">
      <button
        className="w-[108px] flex dialog-content__button text-primary btn bg-white hover:bg-primary hover:text-[#FFF] hover:fill-[#fff]"
        onClick={handleClose}
      >
        <PencilIcon className="dialog-content__button-icon h-4 w-4 fill-primary " />
		<span className="text-[10px] block mr-3">ویرایش</span>
      </button>
	
      <div
        role="button"
        tabIndex={0}
        className={`dialog-content__modal modal cursor-default  ${open ? "modal-open" : ""}`}
        onClick={() => { return setOpen(false); }}
      >
        <div
          onClick={(e) => { return e.stopPropagation(); }}
          role="button"
          tabIndex={-1}
          className="modal-box p-0 overflow-hidden text-right cursor-default"
        >
          <div className="overflow-auto modal-box">
            <div className="flex flex-wrap items-center">
              <h3 className="modal-title">ویرایش  کاربر</h3>
              <button
                className="w-fit mr-auto"
                onClick={() => {
                  handleClose();
                }}
              >
                <XIcon className="stroke-base-200 w-4 h-4" />
              </button>
            </div>

            <form className="dialog-content__form mt-[30px] flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="user-edit-id">نام</label>
              <input
                id="user-edit-id"
                {...register("firstName", {
                  value: userInfo.firstName || "",
                })}
                type="text"
                placeholder="نام را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px] mb-3"
              />
              {errors?.firstName && (
              <small className="dialog-content__errorText text-secondary text-sm w-full h-5 block mt-3 mb-3">
                {errors?.firstName?.message}
              </small>
              )}

			<label htmlFor="user-edit-id ">نام خانوادگی</label>
              <input
                id="user-edit-id"
                {...register("lastName", {
                  value: userInfo.lastName || "",
                })}
                type="text"
                placeholder="نام خانوادگی را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px] mb-3"
              />
              {errors?.lastName && (
              <small className="dialog-content__errorText text-secondary text-sm w-full h-5 block mt-3 mb-3">
                {errors?.lastName?.message}
              </small>
              )}

            <label htmlFor="user-edit-id">نام کاربری</label>
              <input
                id="user-edit-id"
                {...register("userName", {
                  value: userInfo.userName || "",
                })}
                type="text"
                placeholder="نام کاربری را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px] mb-3"
              />
              {errors?.userName && (
              <small className="dialog-content__errorText text-secondary text-sm w-full h-5 block mt-3 mb-3">
                {errors?.userName?.message}
              </small>
              )}

            <label htmlFor="user-edit-id">شماره همراه</label>
              <input
                id="user-edit-id"
                {...register("phoneNumber", {
                  value: userInfo.phoneNumber || "",
                })}
                type="text"
                placeholder="شماره همراه را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px] mb-3"
              />
              {errors?.phoneNumber && (
              <small className="dialog-content__errorText text-secondary text-sm w-full h-5 block mt-3 mb-3">
                {errors?.phoneNumber?.message}
              </small>
              )}  

			<label htmlFor="user-edit-id">ایمیل</label>
              <input
                id="user-edit-id"
                {...register("email", {
                  value: userInfo.email || "",
                })}
                type="text"
                placeholder="ایمیل را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px] mb-3"
              />
              {errors?.email && (
              <small className="dialog-content__errorText text-secondary text-sm w-full h-5 block mt-3 mb-3">
                {errors?.email?.message}
              </small>
              )}

              <div className="dialog-content__action-part modal-action mt-[30px]">
                {editUser.isLoading ? (
                  <div className="spinner" />
                ) : (
                  <>
                    <button
                      className="dialog-content__submit btn modal-btn-success"
                      type="submit"
                    >
                      ارسال
                    </button>

                    <button
                      className="dialog-content__btns btn modal-btn-cancel"
                      type="button"
                      onClick={handleClose}
                    >
                      انصراف
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
