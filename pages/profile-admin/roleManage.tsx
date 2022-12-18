import React, { useEffect, useState } from "react";
import useGetRoles from "../../hooks/roleManagment/useGetRoles";
import { IRole } from "../../interface/users.interface";

import useDebounce from "../../hooks/custom/useDebounce";
import ReactPaginate from "react-paginate";
import { SearchIcon } from "../../public/svg";
import RoleCreate from "../../Components/roleManagment/roleCreate";
import AddAccess from "../../Components/roleManagment/addAccess";
import RoleEdit from "../../Components/roleManagment/roleEdit";
import LayoutAdmin from "../../Components/LayoutAdmin";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
interface IProps {}

const RsersManagment: React.FC<IProps> = () => {
  const [rolesTablePageSize, setRolesTablePageSize] = useState(5);
  const [search, setSearch] = useState<string>("");
  const debouncedValue = useDebounce<string>(search, 1000);

  //   const [list, setList] = useState(data?.roles || []);

  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetRoles(page, rolesTablePageSize);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  function searchResult() {
    if (data && data.roles) {
      const t = data.roles.filter((item: any) => {
        return (
          (item.name && item.name.includes(search)) ||
          (item.description && item.description.includes(search))
        );
      });
      t?.slice((page - 1) * rolesTablePageSize, page * rolesTablePageSize);
      //   setList(t);
      return t;
    }
    return null;
  }
  //   useEffect(() => {
  //     if (data) {
  //       const userList = data?.roles?.slice(
  //         (page - 1) * rolesTablePageSize,
  //         page * rolesTablePageSize,
  //       );
  //       setList(userList);
  //     }
  //   }, [data]);

  useEffect(() => {
    if (debouncedValue) {
      searchResult();
    } else if (!debouncedValue && !search) {
      searchResult();
    }
  }, [debouncedValue]);

  let list = search ? searchResult() : data?.roles;
  console.log("datadata", data);
  return (
    <LayoutAdmin>
      <div className="user-list">
        <div className="user-list__title w-full flex items-center">
          <h1 className="title">لیست نقش ها</h1>
          <div className="flex flex-wrap items-center mr-auto">
            <div className="relative ml-[14px] min-w-[240px]">
              <span className="absolute inset-y-0 right-3 flex items-center">
                <SearchIcon className="w-4 h-4 fill-base-200" />
              </span>
              <input
                type="search"
                className="w-full py-[7px] pr-9 pl-2 bg-transparent rounded-[4px] focus:outline-none border-2 border-gray-300 font-yekan-regular font-normal text-[13px] text-base-200 placeholder:text-gray-300 leading-3"
                placeholder="جست و جو ..."
                autoComplete="off"
                onChange={handleChange}
              />
            </div>

            <RoleCreate />
          </div>
        </div>
     
        <div className=" w-full bg-white rounded-[4px] mt-4  shadow-[0px_2px_3px_rgba(0,0,0,0.07)]">
          <table className="custom-table user-table table-fixed w-full">
            <thead>
              <tr>
                <th>شماره ردیف</th>
                <th>نام نقش</th>
                <th>توضیحات</th>
                <th></th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {list?.map((item: IRole, index: number) => {
                return (
                  <tr key={JSON.stringify(item)} className={`${index % 2 === 1 ? "bg-white" : "bg-[#e5e3e7]" }`}> 
                    <td>
                      <div className="flex items-center">
                        <span className="block text-sm font-yekan-regular font-normal text-base-200 mr-[10px] truncate">
                          {index + 1}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span
                        className="block text-sm font-yekan-regular font-normal text-base-200 truncate"
                        title={item.name}
                      >
                        {item.name}
                      </span>
                    </td>
                    <td>{item.description}</td>
                    <td></td>
                    <td>
                      <div className="user-table__actions h-5 flex gap-x-[21px] justify-end items-center">
                        <AddAccess roleInfo={item} />
                        <RoleEdit roleInfo={item} />
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
            onPageChange={(e: any) => setPage(e.selected + 1)}
            pageRangeDisplayed={5}
            pageCount={data?.count / rolesTablePageSize}
            previousLabel={<IoIosArrowBack size={24} />}

            className="w-[500px] flex justify-between items-center border-1 font-yekan-bold text-[15px] border-[#3498db] rounded-[4px]"
            activeClassName="bg-[#3498db] border-1 border-[#3498db] rounded-[4px] px-3 text-[#fff]"
            disableInitialCallback={page === 1}
            disabledClassName="text-[#8080805e]"
          />
          <select
            className="bg-[#3498db] text-[#fff] rounded mx-3"
            onChange={(e) => {
              setPage(1);
              setRolesTablePageSize(Number.parseInt(e.target.value));
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

export default RsersManagment;
