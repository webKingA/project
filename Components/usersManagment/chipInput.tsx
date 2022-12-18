import React, { useState, useEffect } from "react";
import useGetRoles from "../../hooks/roleManagment/useGetRoles";
import useFinduserroles from "../../hooks/userMangment/useFinduserroles";
import { IRole, IUser } from "../../interface/users.interface";
import { XIcon } from "../../public/svg";

interface IProps {
// chipArrProps:IRole[],
userInfo:IUser;
  getchipArr: any;
  open:boolean;
}

const ChipInput = (props: IProps) => {
  const { userInfo, getchipArr, open } = props;

  const { data, isFetching } = useGetRoles();
  const userRoles = useFinduserroles(userInfo.id).data;

  const [chipArr, setChipArr] = useState<IRole[]>([]);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);


  const deleteTag = (index: number) => {
    const temp: IRole[] = [];
    for (let i = 0; i < chipArr.length; i++) {
      if (i !== index) temp.push(chipArr[i]);
    }
    setChipArr(temp);
  };


  useEffect(() => {
    getchipArr(chipArr);
  }, [chipArr]);

  useEffect(()=>{
	if(!open){
		setChipArr([]);
		setShowDropDown(false);
	}
  },[open])

  useEffect(() => {
	if(userRoles && Array.isArray(userRoles)){
		setChipArr(userRoles);
		if(userRoles.length>0)
		setShowDropDown(true);
	  }
  }, [userRoles])

  return (
    <div
      className="w-full flex flex-wrap items-center   border-2 rounded-sm input-bordered overflow-hidden"
      
    >
      <div className=" flex flex-wrap ">
        {Array.isArray(chipArr) && chipArr.map((chip: IRole, index: number) => {
          return (
            <div className="badge badge-outline border-gray-300 mb-2 p-3 m-1 text-xs">
              {chip.name}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  return deleteTag(index);
                }}
              >
                <XIcon className="w-4 h-4 mr-2" fill="gray" stroke="gray" />
              </button>
            </div>
          );
        })}
      </div>
      <div className="w-full" >
        <input
          type="text"
          className="w-full border-b-[1px] border-gray-200 py-[7px] pr-3 pl-2 bg-transparent focus:outline-none rounded-[4px]  font-yekan-regular font-normal text-[13px] text-base-200 placeholder:text-gray-300 leading-3"
          placeholder={chipArr.length === 0 ? "انتخاب نقش" : ""}
          autoComplete="off"
          onClick={() => setShowDropDown(true)}
        />
        {showDropDown && (
          <ul className="w-full h-[150px]  overflow-y-scroll">
            {data?.roles?.map((item: IRole, index: number) => {
              return (
                <li
                  className="w-full border-b-[1px] border-gray-200 p-3 hover:bg-primary  hover:bg-opacity-[0.15]"
                  key={JSON.stringify(item)}
                  onClick={() => {
                    let check = true;
                    for (let i = 0; i < chipArr.length; i++) {
                      if (chipArr[i].id === item.id) check = false;
                    }
                    if (check) setChipArr(chipArr.concat([item]));
                    console.log("hi");
                  }}
                >
                  <span className="block text-sm font-yekan-regular font-normal text-base-200 mr-[10px] truncate">
                    {item.name}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChipInput;
