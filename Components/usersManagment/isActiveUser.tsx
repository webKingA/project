import React, { useState } from "react";
import { toast } from "react-toastify";
import { IUser } from "../../interface/users.interface";
import useActiveDeActive from "../../hooks/userMangment/useActiveDeActive";

interface IProps {
  userInfo: IUser;
}

const IsActiveUser = (props: IProps) => {
  const [active, setActive] = useState(
    props.userInfo.isActive
  );
  const { userInfo } = props;

  // -------------------- HOOKS --------------------
  const editUser = useActiveDeActive();

  const onSubmit = async () => {
    let temp = { id: userInfo.id, isActive: !active };
    editUser.mutate({
      ...temp,
      callBack: () => {
        toast.success("با موفقیت ثبت شد.");
        setActive(!active);
      },
    });
  };

  return (
    <div className="flex w-[150px] justify-between">
      <span className={` "text-[#27ae60]"}`}>{userInfo.isActive && "فعال"}</span>
      <input
        type="checkbox"
        className="toggle toggle-accent"
        defaultChecked={userInfo.isActive}
        onChange={onSubmit}
      />
      <span>{!userInfo.isActive && "غیرفعال"}</span>
    </div>
  );
};

export default IsActiveUser;
