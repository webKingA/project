import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import DetailConflicts from "../../../Components/conflict/detailConflicts";
import LayoutAdmin from "../../../Components/LayoutAdmin";
import useGetReserveConflict from "../../../hooks/confilict/useGetReserveConflict";
import useResolveconflict from "../../../hooks/confilict/useResolveconflict";
import { IConflict } from "../../../interface/confilict.interface";


interface IProps {}

const Conflict: React.FC<IProps> = () => {
	const [conflictTablePageSize, setConflictTablePageSize] = useState(5);
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetReserveConflict(
    page,
    conflictTablePageSize
  );

  const [conflictObj, setConfilictObj] = useState<IConflict | null>(null);
  const resolveConfilictHook = useResolveconflict();
  const [confilictLoader, setConfilictLoader] = useState<any>(null);

  const ResolveConfilict = (confilictItem: IConflict) => {
    setConfilictLoader(confilictItem?.id);
    resolveConfilictHook.mutate({
      flightReserveId: confilictItem?.id || 0,
      flightPassengerId: confilictItem?.flightPassengerId || 0,
      callBack: (res: any) => {
        if (res) {
          for (let i = 0; i < res.length; i++) {
            toast.error(res[i]);
            console.log("------------------->>>>", res[i]);
          }
        }
        setConfilictLoader(null);
      },
    });
  };

  return (
    <LayoutAdmin>
      <div className="conflict-list">
        <div className="conflict-list__title w-full flex items-center">
          <h1 className="title">لیست مغایرت ها</h1>
        </div>
        {conflictObj && (
          <DetailConflicts
            conflictObj={conflictObj}
            closeModal={() => setConfilictObj(null)}
          />
        )}
 
        <div className="overflow-x-auto  w-full bg-white rounded-[4px] mt-4 h-[calc(100vh-320px)] min-h-[320px] shadow-[0px_2px_3px_rgba(0,0,0,0.07)]">
          <table className="custom-table conflict-table table-fixed  w-full">
            <thead>
              <tr>
                <th>مغایرت مالی کنسلی</th>
                <th>مغایرت مالی اعتبارات</th>
                <th>مغایرت مالی مشتری</th>
                <th>مغایرت پروایدر</th>
                <th>مغایرت مالی اعتبارات</th>
                <th>مغایرت مالی مشتری</th>
                <th className="w-[350px]" style={{ textAlign: "center" }}>
                  عملیات
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.result.map((item: IConflict,index:number) => {
                return (
                  <tr key={JSON.stringify(item)} className={`${index % 2 === 1 ? "bg-white" : "bg-[#e5e3e7]" }`} >
                    <td>{item.isConflictCancelSeat ? "بلی" : "خیر"}</td>
                    <td>{item.isConflictCredit ? "بلی" : "خیر"}</td>
                    <td>{item.isConflictCustomer ? "بلی" : "خیر"}</td>
                    <td>{item.isConflictProvider ? "بلی" : "خیر"}</td>
                    <td>{item.isPassengerConflictCredit ? "بلی" : "خیر"}</td>
                    <td>{item.isPassengerConflictCustomer ? "بلی" : "خیر"}</td>
                    <td>
                      <button
                        className="dialog-content__button btn bg-[#3498db] hover:bg-[#3498db]"
                        onClick={() => setConfilictObj(item)}
                      >
                        نمایش جزئیات
                      </button>
                      <button
                        className="dialog-content__button btn bg-[#3498db] hover:bg-[#3498db] mr-3"
                        onClick={() => ResolveConfilict(item)}
                      >
                        مغایرت گیری
                        {confilictLoader === item.id && <div className="spinner mr-2" />}
                      </button>
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
          }}
        >
          <ReactPaginate
            breakLabel="..."
            nextLabel={<IoIosArrowForward size={24} />}
            previousLabel={<IoIosArrowBack size={24} />}
            onPageChange={(e: any) => setPage(e.selected+1)}
            pageRangeDisplayed={5}
            pageCount={data?.count / conflictTablePageSize}
            className="w-[300px] flex justify-between border-1 border-[#3498db] rounded-[4px]"
            activeClassName="bg-[#3498db] border-1 border-[#3498db] rounded-[4px] px-3 text-[#fff]"
            disableInitialCallback={page === 1}
            disabledClassName="text-[#8080805e]"
          />
		  <select
            className="bg-[#3498db] text-[#fff] rounded mx-3"
            onChange={(e) =>{
				setPage(1);
				setConflictTablePageSize(Number.parseInt(e.target.value))
			}
            }
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

export default Conflict;
