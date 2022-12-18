import React, { useEffect, useState } from "react";
import useGetUsers from "../../hooks/userMangment/useGetUsers";
import { IUser } from "../../interface/users.interface";
import useDebounce from "../../hooks/custom/useDebounce";
import ReactPaginate from "react-paginate";
import AdvanceSearch from "../../Components/usersManagment/advanceSearch";
import UserCreate from "../../Components/usersManagment/userCreate";
import { FillArrow } from "../../public/svg";
import IsActiveUser from "../../Components/usersManagment/isActiveUser";
import ChangeUserRole from "../../Components/usersManagment/changeUserRole";
import UserEdit from "../../Components/usersManagment/userEdit";
import LayoutAdmin from "../../Components/LayoutAdmin";
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
interface IProps {}

const UsersManagment: React.FC<IProps> = () => {
  const [userTablePageSize, setUserTablePageSize] =
    useState(5);
  const [page, setPage] = useState(1);
  const [searchAvailble, setSearchAvailble] =
    useState(false);
  const { data, isFetching } = useGetUsers(
    page,
    userTablePageSize
  );

  let hasAccess = false;
  // let access = localStorage.getItem("access");
  // if (access) {
  //   hasAccess = access.includes("Admin");
  // }

  let list = data?.users.users;

  return (
    <LayoutAdmin>
      <div className="user-list">
        <div className="user-list__title w-full flex items-center">
          <h1 className="title">لیست کاربران</h1>
          <div className="flex flex-wrap items-center mr-auto">
            <AdvanceSearch
              checkIsOpen={(e) => {
                setSearchAvailble(e);
              }}
            />
            <UserCreate />
          </div>
        </div>
   
        <div
          className={`overflow-x-auto w-full bg-white rounded-[4px] mt-4 shadow-[0px_2px_3px_rgba(0,0,0,0.07)]`}
        >
          <table className="custom-table user-table table-fixed w-full">
            <thead>
              <tr>
                <th>
                  <div className="flex">
                    <span className="block">نام کاربر</span>

                    <div className="flex flex-col mr-[11px]">
                      <button className="btn btn-up p-0 bg-transparent hover:bg-transparent">
                        <FillArrow className="w-[9px] h-[9px] fill-base-100" />
                      </button>
                      <button className="btn btn-up p-0 bg-transparent hover:bg-transparent">
                        <FillArrow className="w-[9px] h-[9px] fill-base-100 rotate-180" />
                      </button>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="flex">
                    <span className="block">
                      نام کاربری
                    </span>

                    <div className="flex flex-col mr-[11px]">
                      <button className="btn btn-up p-0 bg-transparent hover:bg-transparent">
                        <FillArrow className="w-[9px] h-[9px] fill-base-100" />
                      </button>
                      <button className="btn btn-up p-0 bg-transparent hover:bg-transparent">
                        <FillArrow className="w-[9px] h-[9px] fill-base-100 rotate-180" />
                      </button>
                    </div>
                  </div>
                </th>

                <th>موبایل</th>
                <th>وضعیت</th>
                <th></th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {list?.map((item: IUser, index: number) => {
                return (
                  <tr
                    key={JSON.stringify(item)}
                    className={`${
                      index % 2 === 1
                        ? "bg-white"
                        : "bg-[#e5e3e7]"
                    }`}
                  >
                    <td>
                      <div className="flex items-center">
                        <span
                          className="block text-sm font-yekan-regular font-normal text-base-200 mr-[10px] truncate"
                          title={item.userName}
                        >
                          {item.firstName +
                            " " +
                            item.lastName}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span
                        className="block text-sm font-yekan-regular font-normal text-base-200 truncate"
                        title={item.userName}
                      >
                        {item.userName}
                      </span>
                    </td>

                    <td>
                      <span className="px-3 py-[5px] bg-neutral-content font-yekan-medium text-[13px] text-base-200 rounded-3xl">
                        {item.phoneNumber}
                      </span>
                    </td>
                    <td>
                      <IsActiveUser userInfo={item} />
                    </td>
                    <td></td>
                    {/* <td>
                      <div className="user-table__actions h-5 flex gap-x-[21px] justify-end items-center">
                        <AddAccess userInfo={item} />
                      </div>
                    </td> */}
                    <td>
                      <div className="user-table__actions h-5 flex gap-x-[21px] justify-end items-center">
                        <ChangeUserRole userInfo={item} />

                        {hasAccess && (
                          <UserEdit userInfo={item} />
                        )}
                        {/* <UserDelete user={item} /> */}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div
          dir="ltr"
          className="flex justify-end items-center rounded-lg px-4 user-list__pagination w-fit py-7 shadow-lg h-fit bg-cover mt-[30px] text-left"
          style={{
            position: "sticky",
            top: 0,
            height: "27px",
            background: "#f5f5f5",
            zIndex: 10,
          }}
        >
          <ReactPaginate
            breakLabel="..."
            nextLabel={<IoIosArrowForward size={24} />}
            previousLabel={<IoIosArrowBack size={24} />}
            onPageChange={(e: any) => {
              console.log(e);
              setPage(e.selected + 1);
            }}
            pageRangeDisplayed={5}
            pageCount={
              data?.users.count / userTablePageSize
            }
            className="w-[500px] flex justify-between items-center border-1 font-yekan-bold text-[15px] border-[#3498db] rounded-[4px]"
            activeClassName="bg-[#3498db] border-1 border-[#3498db] rounded-[4px] px-3 text-[#fff]"
            disableInitialCallback={page === 1}
            disabledClassName="text-[#8080805e]"
          />
          <select
            className="bg-[#3498db]  text-[#fff] rounded mx-3"
            onChange={(e) => {
              setPage(1);
              setUserTablePageSize(
                Number.parseInt(e.target.value)
              );
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={150}>150</option>
            <option value={200}>200</option>
            <option value={300}>300</option>
            <option value={400}>400</option>
            <option value={500}>500</option>
          </select>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default UsersManagment;
