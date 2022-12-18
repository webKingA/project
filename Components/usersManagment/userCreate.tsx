import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { userCreateSchema } from "./validation.yup";
import useGetRoles from "../../hooks/roleManagment/useGetRoles";
import useAddUser from "../../hooks/userMangment/useAddUser";
import { PlusIcon, XIcon } from "../../public/svg";

interface IForm {
  email: string;
  firstName: string;
  lastName: null;
  phoneNumber: string;
  userName: string;
  password: string;
  confirmPassword: string;
}

const UserCreate = () => {
  const [open, setOpen] = useState(false);

  
  // -------------------- HOOKS --------------------
  //   const getUsersHook = useGetRoles();
  const addUserHook = useAddUser();

  const form = useForm<IForm>({
    resolver: yupResolver(userCreateSchema),
  });
  const { register, handleSubmit, formState, reset, clearErrors } = form;
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

  const onSubmit = async (dataForm: IForm) => {
    await addUserHook.mutate({
      ...dataForm,
      callBack: (res) => {
        if (res) {
          for (let i = 0; i < res.length; i++) {
            toast.error(res[i]);
            console.log("------------------->>>>", res[i]);
          }
        } else {
          toast.success("کاربر مورد نظر اضافه شد.");
          handleReset();
          handleOpen();
        }
      },
    });
  };

  return (
    <div className="add-user-dialog dialog-content">
      <button
        className="dialog-content__button bg-[#3498db] btn hover:bg-[#2980b9] flex items-center font-yekan-bold text-"
        onClick={handleClose}
        // disabled={getUsersHook.isError}
      >
        <PlusIcon className="dialog-content__button-icon h-4 w-4" />
        <span className="block mr-3">کاربر جدید</span>
      </button>
      <div
        role="button"
        tabIndex={0}
        className={`dialog-content__modal modal cursor-default  ${
          open ? "modal-open" : ""
        }`}
        onClick={() => {
          return setOpen(false);
        }}
      >
        <div
          onClick={(e) => {
            return e.stopPropagation();
          }}
          role="button"
          tabIndex={-1}
          className="modal-box max-w-[830px] p-0 overflow-hidden text-right cursor-default"
        >
          <div className="max-w-[830px] overflow-auto modal-box">
            <div className="flex flex-wrap items-center">
              <h3 className="modal-title">افزودن کاربر جدید</h3>
              <button
                className="w-fit mr-auto"
                onClick={() => {
                  handleClose();
                }}
              >
                <XIcon className="stroke-base-200 w-4 h-4" />
              </button>
            </div>

            <form
              className="dialog-content__form mt-[30px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="user-create-id">نام</label>
              <input
                id="user-create-id"
                {...register("firstName", {
                  required: true,
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
              <label htmlFor="user-create-id">نام خانوادگی </label>
              <input
                id="user-create-id"
                {...register("lastName", {
                  required: true,
                })}
                type="text"
                placeholder="نام خانوادگی  را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px] mb-3"
              />
              {errors?.lastName && (
                <small className="dialog-content__errorText text-secondary text-sm w-full h-5 block mt-3 mb-3">
                  {errors?.lastName?.message}
                </small>
              )}

              <label htmlFor="user-create-id">نام کاربری</label>
              <input
                id="user-create-id"
                {...register("userName", {
                  required: true,
                })}
                type="text"
                placeholder="نام کاربری  را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px] mb-3"
              />
              {errors?.userName && (
                <small className="dialog-content__errorText text-secondary text-sm w-full h-5 block mt-3 mb-3">
                  {errors?.userName?.message}
                </small>
              )}

              <div className="flex mt-3 mb-3 justify-between items-center">
                <label htmlFor="user-create-id"> پسورد</label>
                <input
                  id="user-create-id"
                  {...register("password", {
                    required: true,
                  })}
                  type="password"
                  placeholder="پسورد را وارد کنید"
                  className="dialog-content__Input w-[300px] input input-bordered w-full mt-[10px] "
                />

                <label htmlFor="user-create-id ">تکرار پسورد</label>
                <input
                  id="user-create-id"
                  {...register("confirmPassword", {
                    required: true,
                  })}
                  type="password"
                  placeholder="تکرار پسورد را وارد کنید"
                  className="dialog-content__Input  w-[300px] input input-bordered w-full mt-[10px]"
                />
              </div>

              <div className="flex mt-3 mb-3 justify-between items-center">
                {errors?.password && (
                  <small className="dialog-content__errorText text-secondary text-sm w-full h-5 block mt-3">
                    {errors?.password?.message}
                  </small>
                )}
                {errors?.confirmPassword && (
                  <small className="dialog-content__errorText text-secondary text-sm w-full h-5 block mt-3">
                    {errors?.confirmPassword?.message}
                  </small>
                )}
              </div>

              <div className="flex mt-3 mb-3 justify-between items-center">
                <label htmlFor="user-create-id">ایمیل</label>
                <input
                  id="user-create-id"
                  {...register("email", {
                    required: true,
                  })}
                  type="text"
                  placeholder="ایمیل را وارد کنید"
                  className="dialog-content__Input input input-bordered w-[300px] mt-[10px] mb-3"
                />

                <label htmlFor="user-create-id">شماره همراه</label>
                <input
                  id="user-create-id"
                  {...register("phoneNumber", {
                    required: true,
                  })}
                  type="text"
                  placeholder="شماره همراه را وارد کنید"
                  className="dialog-content__Input input input-bordered w-[300px] mt-[10px] mb-3"
                />
              </div>
              <div className="flex mt-3 mb-3 justify-between items-center">
                {errors?.phoneNumber && (
                  <small className="dialog-content__errorText text-secondary text-sm w-full h-5 block mt-3 mb-3">
                    {errors?.phoneNumber?.message}
                  </small>
                )}
                {errors?.email && (
                  <small className="dialog-content__errorText text-secondary text-sm w-full h-5 block mt-3 mb-3">
                    {errors?.email?.message}
                  </small>
                )}
              </div>

              <div className="dialog-content__action-part modal-action mt-[30px]">
                {addUserHook.isLoading ? (
                  <div className="spinner" />
                ) : (
                  <>
                    <button
                      className="dialog-content__submit btn bg-[#3498db] hover:bg-[#2980b9] w-24"
                      type="submit"
                    >
                      ارسال
                    </button>
                    <button
                      className="dialog-content__btns text-xs font-yekan-bold w-24 border rounded-lg"
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

export default UserCreate;
