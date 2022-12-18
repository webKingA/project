import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { aclSchema } from "./validation.yup";

import { IRole } from "../../interface/roles.interface";
import useEditRole from "../../hooks/roleManagment/useEditRole";
import { PencilIcon, XIcon } from "../../public/svg";
import { RiEdit2Fill } from "react-icons/ri";

interface IProps {
   roleInfo: IRole
}

interface IForm{
	name:string;
	description:string;
}

const RoleEdit = (props: IProps) => {
  const [open, setOpen] = useState(false);
  const { roleInfo } = props;

  // -------------------- HOOKS --------------------
const editRole = useEditRole();
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
	let temp={...data,id:roleInfo.id}
    editRole.mutate({
      ...temp,
      callBack: () => {
        toast.success("با موفقیت ثبت شد.");
        handleOpen();
        handleReset();
      },
    });
  };

  return (
    <div className="edit-user-dialog dialog-content rounded-[4px]">
      <button
        className=" text-[#3498db]  w-[110px] h-[40px] rounded-lg border border-[#3498db] flex justify-center items-center bg-white hover:bg-[#3498db] hover:text-[#FFF]"
        onClick={handleClose}
        disabled={editRole.isError}
      >
       <RiEdit2Fill size={22}/>
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
              <h3 className="modal-title">ویرایش  نقش</h3>
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
                {...register("name", {
                  value: roleInfo.name || "",
                })}
                type="text"
                placeholder="نام نقش را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px]"
              />
              {errors?.name && (
              <small className="dialog-content__errorText text-secondary text-sm w-full h-5 block mt-3">
                {errors?.name?.message}
              </small>
              )}

<label htmlFor="user-edit-id">توضیحات</label>
              <input
                id="user-edit-id"
                {...register("description", {
                  value: roleInfo.description || "",
                })}
                type="text"
                placeholder="نام نقش را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px]"
              />
              {errors?.description && (
              <small className="dialog-content__errorText text-secondary text-sm w-full h-5 block mt-3">
                {errors?.description?.message}
              </small>
              )}


              <div className="dialog-content__action-part modal-action mt-[30px]">
                {editRole.isLoading ? (
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
                      className="dialog-content__btns border w-24 rounded-lg text-black"
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

export default RoleEdit;

