import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { aclSchema } from "./validation.yup";
import useGetRoles from "../../hooks/roleManagment/useGetRoles";
import useAddUser from "../../hooks/userMangment/useAddUser";
import ChipInput from "./chipInput";
import {
  IRole,
  IUser,
} from "../../interface/users.interface";
import useChangeuserRoles from "../../hooks/userMangment/useChangeuserRoles";
import useFinduserroles from "../../hooks/userMangment/useFinduserroles";
import { PlusIcon, XIcon } from "../../public/svg";
import { HiPlusSm } from "react-icons/hi";
interface IProps {
  userInfo: IUser;
}

interface IForm {}

const ChangeUserRole = (props: IProps) => {
  const { userInfo } = props;
  const [open, setOpen] = useState(false);
  const [chipArr, setChipArr] = useState<IRole[]>([]);

  // -------------------- HOOKS --------------------

  const changeuserRoles = useChangeuserRoles();

  const form = useForm<IForm>({
    resolver: yupResolver(aclSchema),
  });
  const { handleSubmit, reset } = form;

  const handleClose = () => {
    setChipArr([]);
    setOpen(!open);
    reset();
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const onSubmit = async () => {
    let temp = [];
    for (let i = 0; i < chipArr.length; i++)
      temp.push(chipArr[i].id);
    await changeuserRoles.mutate({
      userId: userInfo.id,
      roles: temp,
      callBack: (res) => {
        if (res) {
          for (let i = 0; i < res.length; i++) {
            toast.error(res[i]);
          }
        } else {
          toast.success("تغییر نقش با موفقیت انجام شد");
          handleClose();
        }
      },
    });
  };
  return (
    <div className="add-user-dialog dialog-content border border-[#3498db] rounded-[4px]">
      <button
        className=" text-[#3498db] btn bg-white hover:bg-[#3498db] hover:text-[#FFF]"
        onClick={handleOpen}
      >
        <p className="flex items-center ">
          {" "}
          <HiPlusSm size={20} />
          <span className="text-[12px] block mr-1">
            انتصاب نقش
          </span>
        </p>
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
        {open && (
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
                <h3 className="modal-title">
                  انتصاب نقش به کاربر
                </h3>
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
                <span>انتخاب نقش </span>
                <div className="mt-5">
                  <ChipInput
                    userInfo={userInfo}
                    // chipArrProps={chipArr}
                    getchipArr={(
                      e: React.SetStateAction<IRole[]>
                    ) => setChipArr(e)}
                    open={open}
                  />
                </div>
                <div className="dialog-content__action-part modal-action mt-[30px]">
                  {changeuserRoles.isLoading ? (
                    <div className="spinner" />
                  ) : (
                    <>
                      <button
                        className="dialog-content__submit btn modal-btn-success"
                        type="submit"
                        onClick={() => {
                          onSubmit();
                        }}
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
        )}
      </div>
    </div>
  );
};

export default ChangeUserRole;
