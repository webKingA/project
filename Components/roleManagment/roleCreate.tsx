import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { aclSchema } from "./validation.yup";
import useGetRoles from "../../hooks/roleManagment/useGetRoles";
import useAddUser from "../../hooks/userMangment/useAddUser";
import useAddRole from "../../hooks/roleManagment/useAddRole";
import { PlusIcon, XIcon } from "../../public/svg";

interface IForm {
 name:string;
 description:string;
}

const RoleCreate = () => {
  const [open, setOpen] = useState(false);

  // -------------------- HOOKS --------------------
  const getRolesHook = useGetRoles();
  const addRoleHook = useAddRole();

  const form = useForm<IForm>({
    resolver: yupResolver(aclSchema),
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
	console.log("fsdfdsfdsf",dataForm)
    await addRoleHook.mutate({
      ...dataForm,
      callBack: () => {
        toast.success("نقش مورد نظر  اضافه شد.");
        handleReset();
        handleOpen();
      },
    });
  };
console.log(errors)
  return (
    <div className="add-user-dialog dialog-content">
      <button
        className="dialog-content__button bg-[#3498db] btn hover:bg-[#2980b9] flex items-center font-yekan-bold text-"
        onClick={handleClose}
        disabled={getRolesHook.isError}
      >
        <PlusIcon className="dialog-content__button-icon h-4 w-4" />
        <span className="block mr-3">نقش جدید</span>
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
              <h3 className="modal-title">افزودن نقش جدید</h3>
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
                {...register("name", {
                  required: true,
                })}
                type="text"
                placeholder="نام را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px]"
              />
              {errors?.name && (
                <small className="dialog-content__errorText text-secondary text-sm w-full h-5 block mt-3">
                  {errors?.name?.message}
                </small>
              )}
              <label htmlFor="user-create-id">توضیحات</label>
              <input
                id="user-create-id"
                {...register("description", {
                  required: true,
                })}
                type="text"
                placeholder="توضیحات را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px]"
              />
              {errors?.description && (
                <small className="dialog-content__errorText text-secondary text-sm w-full h-5 block mt-3">
                  {errors?.description?.message}
                </small>
              )}

              <div className="dialog-content__action-part modal-action mt-[30px]">
                {addRoleHook.isLoading ? (
                  <div className="spinner" />
                ) : (
                  <>
                    <button
                      className="dialog-content__submit text-xs font-yekan-bold w-24 py-2 text-white border rounded-lg  bg-[#3498db] hover:bg-[#2980b9]"
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

export default RoleCreate;
