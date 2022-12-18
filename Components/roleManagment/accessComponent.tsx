import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { aclSchema } from "./validation.yup";
import { EAccess, sampleListAccess } from "../../interface/enum";
import useGetUser from "../../hooks/userMangment/useGetUser";
import useAddAccessToRoles from "../../hooks/accessManagment/useAddAccessToRoles";
import useRemoveAccessToRoles from "../../hooks/accessManagment/useRemoveAccessToRoles";
import { IRole } from "../../interface/roles.interface";
interface IProps {
	roleInfo: IRole;
  handleClose:()=>void;
}

interface IForm {

}

const AccessComponent = (props: IProps) => {
  const { handleClose } = props;
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { roleInfo } = props;

  // -------------------- HOOKS --------------------
  const addAccess = useAddAccessToRoles();
  const removeAccess = useRemoveAccessToRoles();
  const form = useForm<IForm>({
    resolver: yupResolver(aclSchema),
  });

  const [listAccess, setListAccess] = useState<any[]>(roleInfo.claims || []);

  const onSubmitAdd = async (item: EAccess) => {
	setIsLoading(true);
    addAccess.mutate({
		roleId: roleInfo.id,
      access: item,
      callBack: (res: any) => {
        if (res) {
          for (let i = 0; i < res.length; i++) {
            toast.error(res[i]);
          }
        } else {
          let temp = listAccess;
          temp?.push(item);
          setListAccess(temp);
          toast.success("با موفقیت ثبت شد.");
        }
		setIsLoading(false);
      },
    });
  };

  const onSubmitRemove = async (item: EAccess) => {
	setIsLoading(true);
    removeAccess.mutate({
		roleId: roleInfo.id,
      access: item,
      callBack: (res: any) => {
        if (res) {
          for (let i = 0; i < res.length; i++) {
            toast.error(res[i]);
          }
        } else {
          let temp: any = [];
          for (let i = 0; i < listAccess?.length; i++) {
            if (listAccess[i] !== item) temp.push(listAccess[i]);
          }
          setListAccess(temp);
          toast.success("با موفقیت حذف شد.");
        }
		setIsLoading(false);
      },
    });
  };

  const changeChecBox = (item: any) => {
    if (!listAccess?.includes(item)) {
      onSubmitAdd(item);
    } else {
      onSubmitRemove(item);
    }
    setRefresh(true);
  };

  useEffect(() => {
    if (refresh) setRefresh(false);
  }, [refresh]);

  useEffect(() => {
	if(roleInfo.claims){
		let temp=[];
		for(let i=0;i<roleInfo.claims.length ;i++){
			temp.push(roleInfo.claims[i].claimValue);
		}
		setListAccess(temp);
	}
  }, [roleInfo.claims])


  return (


	<form
		className="dialog-content__form mt-[30px] flex flex-col"
	>
		<div className="flex">
		<label htmlFor="user-edit-id ml-3">انتخاب سطح دسترسی</label>
		{isLoading && <div className="spinner" />}
		</div>
		<div className="flex flex-wrap mt-8">
		{sampleListAccess.map((item) => {
		return (
			<div className="flex items-center mx-3 my-3">
			<label className="label">
				<input
				type="checkbox"
				className="checkbox w-4 h-4"
				checked={listAccess?.includes(item)}
				onChange={() => {
					changeChecBox(item);
				}}
				/>
				<span className="checkbox-text mr-1">{item}</span>
			</label>
			</div>
		);
		})}
		</div>

		<div className="dialog-content__action-part modal-action mt-[30px]">
			<button
				className="dialog-content__btns border px-5 py-2 rounded-lg text-black"
				type="button"
				onClick={()=>{
					setListAccess([]);
					setIsLoading(false);
					handleClose()}}
			>
				انصراف
			</button>
		</div>
	</form>
      
  );
};

export default AccessComponent;
