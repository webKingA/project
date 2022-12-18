import React, { useState,  } from "react";
import { PlusIcon, XIcon } from "../../assets/svg";
import { IUser } from "../../interface/users.interface";
import AccessComponent from "./accessComponent";
interface IProps {
  userInfo: IUser;
}

const AddAccess = (props: IProps) => {
  const [open, setOpen] = useState(false);
  const { userInfo } = props;

  // -------------------- HOOKS --------------------
  const handleClose = () => {
    setOpen(!open);
  };



  return (
    <div className="edit-user-dialog dialog-content border-2 border-[#7446B2] rounded-[4px]">
      <button
        className="dialog-content__button text-primary btn bg-white hover:bg-primary hover:text-[#FFF]"
        onClick={handleClose}
      >
        <PlusIcon className="dialog-content__button-icon h-4 w-4" />
        <span className="text-[10px] block mr-3">انتصاب دسترسی</span>
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
          className="modal-box p-0 overflow-hidden text-right cursor-default"
        >
         {open && 
		  <div className="overflow-auto modal-box">
		  <div className="flex flex-wrap items-center">
			<h3 className="modal-title">دسترسی های کاربر</h3>
			<button
			  className="w-fit mr-auto"
			  onClick={() => {
				handleClose();
			  }}
			>
			  <XIcon className="stroke-base-200 w-4 h-4" />
			</button>
		  </div>
			  <AccessComponent userInfo={userInfo} handleClose={handleClose} />
		</div>
		 }
        </div>
      </div>
    </div>
  );
};

export default AddAccess;
