import React, { useState,  } from "react";
import { HiPlusSm } from "react-icons/hi";
import { IRole } from "../../interface/roles.interface";
import { PlusIcon, XIcon } from "../../public/svg";
import AccessComponent from "./accessComponent";
interface IProps {
	roleInfo: IRole;
}

const AddAccess = (props: IProps) => {
  const [open, setOpen] = useState(false);
  const { roleInfo } = props;

  // -------------------- HOOKS --------------------
  const handleClose = () => {
    setOpen(!open);
  };



  return (
    <div className="w-full p-0 edit-user-dialog dialog-content   rounded-[4px]">
      <button
        className=" text-[#3498db]  w-[110px]  h-[40px] rounded-lg border border-[#3498db] flex justify-center items-center bg-white hover:bg-[#3498db] hover:text-[#FFF]"
        onClick={handleClose}
      >
        <HiPlusSm size={20}/>
        <span className="text-[10px] block ">انتصاب دسترسی</span>
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
			  <AccessComponent roleInfo={roleInfo} handleClose={handleClose} />
		</div>
		 }
        </div>
      </div>
    </div>
  );
};

export default AddAccess;
