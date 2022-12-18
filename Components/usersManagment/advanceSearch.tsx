import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useSearchUsers from "../../hooks/userMangment/useSearchUsers";
import { searchSchema } from "./validation.yup";
import { yupResolver } from "@hookform/resolvers/yup";
interface IProps {
  checkIsOpen: (e: boolean) => void;
}

interface IForm {
  // "pageNumber": 0,
  // "pageSize": 0,
  textToFind: string;
  isPartOfEmail: boolean;
  isUserId: boolean;
  isPartOfName: boolean;
  isPartOfLastName: boolean;
  isPartOfUserName: boolean;
  userIsActive: boolean;
  showAllUsers: boolean;
}

const AdvanceSearch = (props: IProps) => {
  const { checkIsOpen } = props;
  const [open, setOpen] = useState(false);
  const form = useForm<IForm>({
    resolver: yupResolver(searchSchema),
  });
  const {
    register,
    handleSubmit,
    formState,
    reset,
    clearErrors,
  } = form;
  const { errors } = formState;
  const searchUsersHook = useSearchUsers();

  const toggleOpen = () => {
    setOpen(!open);
  };

  const onSubmit = async (dataForm: IForm) => {
    await searchUsersHook.mutate({
      textToFind: dataForm.textToFind,
      isPartOfEmail: dataForm.isPartOfEmail,
      isUserId: dataForm.isUserId,
      isPartOfName: dataForm.isPartOfName,
      isPartOfLastName: dataForm.isPartOfLastName,
      isPartOfUserName: dataForm.isPartOfUserName,
      userIsActive: dataForm.showAllUsers
        ? null
        : dataForm.userIsActive,
      showAllUsers: dataForm.showAllUsers,
      callBack: (res) => {
        if (res) {
          for (let i = 0; i < res.length; i++) {
            toast.error(res[i]);
            console.log("------------------->>>>", res[i]);
          }
        } else {
          // checkIsOpen(false);
          toggleOpen();
        }
      },
    });
  };

  const onCancel = async () => {
    await searchUsersHook.mutate({
      textToFind: null,
      isPartOfEmail: null,
      isUserId: null,
      isPartOfName: null,
      isPartOfLastName: null,
      isPartOfUserName: null,
      userIsActive: null,
      showAllUsers: null,
      callBack: (res) => {
        if (res) {
          for (let i = 0; i < res.length; i++) {
            toast.error(res[i]);
            console.log("------------------->>>>", res[i]);
          }
        } else {
          // checkIsOpen(false);
          toggleOpen();
        }
      },
    });
  };

  return (
    <div className="ml-5">
      <button
        className="dialog-content__button btn bg-[#3498db] hover:bg-[#2980b9] font-yekan-bold shadow-sm !text-white  mr-2"
        onClick={() => {
          checkIsOpen(true);
          toggleOpen();
        }}
      >
        <span className="block h-4" />
        <span className="block leading-3 ">
          جستجوی پیشرفته
        </span>
      </button>
      <div
        role="button"
        tabIndex={0}
        onClick={(e) => {
          return e.stopPropagation();
        }}
        className={`modal overflow-auto ${
          open ? "modal-open" : ""
        }`}
      >
        <div className="modal-box p-0 overflow-hidden text-right">
          <div className="overflow-auto modal-box">
            <form
              className="edit-category__form modal-box__form mt-10 flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="user-create-id">
                متن جستجو
              </label>
              <input
                id="user-create-id"
                {...register("textToFind", {
                  required: false,
                })}
                type="text"
                placeholder="متن جستجو را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px]"
              />
              <div className="w-[50%]">
                <div className="form-control">
                  <label className="label cursor-pointer mt-3">
                    <label> جستجو در ایمیل کاربران</label>
                    <input
                      {...register("isPartOfEmail")}
                      type="checkbox"
                      className="checkbox w-4 h-4"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <label>جستجو در شناسه کاربران</label>
                    <input
                      type="checkbox"
                      className="checkbox w-4 h-4"
                      {...register("isUserId")}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <label>جستجو در نام کاربران</label>
                    <input
                      type="checkbox"
                      className="checkbox w-4 h-4"
                      {...register("isPartOfName")}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <label>جستجو در فامیل کاربران</label>
                    <input
                      type="checkbox"
                      className="checkbox w-4 h-4"
                      {...register("isPartOfLastName")}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <label>
                      جستجو در نام کاربری کاربران
                    </label>
                    <input
                      type="checkbox"
                      className="checkbox w-4 h-4"
                      {...register("isPartOfUserName")}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <label>نمایش کاربران فعال</label>
                    <input
                      type="checkbox"
                      className="checkbox w-4 h-4"
                      {...register("userIsActive")}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <label>نمایش همه کاربران</label>
                    <input
                      type="checkbox"
                      className="checkbox w-4 h-4"
                      {...register("showAllUsers")}
                    />
                  </label>
                </div>
              </div>

              <div className="modal-action mt-8">
                {/* {searchHook.isLoading ? (
                  <div className="spinner" />
                ) : ( */}
                <>
                  <button
                    className="border rounded-lg text-xs font-yekan-bold text-black ml-4 w-32"
                    type="button"
                    onClick={() => {
                      checkIsOpen(false);
                      onCancel();
                    }}
                  >
                    انصراف
                  </button>
                  <button
                    className="bg-[#3498db] hover:bg-[#2980b9] rounded-lg text-xs font-yekan-bold w-32 py-2 text-white"
                    type="submit"
                    //   onClick={(e) => {
                    //     e.preventDefault();
                    //      return toggleOpen();
                    //   }}
                  >
                    جستجو
                  </button>
                </>
                {/* )} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceSearch;
