import React, { useEffect, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import LayoutAdmin from "../../../Components/LayoutAdmin";
import ReportDetail from "../../../Components/sellsFinancial/reportDetail";
import useGetSellsfinancialsreport from "../../../hooks/sellsFinancial/useGetSellsfinancialsreport";
import { reserveObj } from "../../../interface/report.interface";

interface IProps {}

const SellsFinancial: React.FC<IProps> = () => {
  const [reportTablePageSize, setReportTablePageSize] =
    useState(5);
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetSellsfinancialsreport(
    page,
    reportTablePageSize
  );

  const [reportObj, setReportObj] =
    useState<reserveObj | null>(null);
  const [reportLoader, setreportLoader] = useState(false);

  //   const ResolveConfilict=(confilictItem:reserveObj)=>{
  // 	setreportLoader(true);
  // 	resolveConfilictHook.mutate({
  // 		flightReserveId:confilictItem?.id || 0,flightPassengerId:confilictItem?.flightPassengerId || 0,
  // 		callBack: (res:any) => {
  // 		  if(res){
  // 			  for(let i=0;i<res.length;i++){
  // 				  toast.error(res[i]);
  // 				  console.log("------------------->>>>",res[i])
  // 			  }
  // 			}
  // 			setreportLoader(false);
  // 		},
  // 	  });
  //   }

  return (
    <LayoutAdmin>
      <div className="SellsFinancial-list">
        <div className="SellsFinancial-list__title w-full flex items-center">
          <h1 className="title">لیست گزارش ها</h1>
        </div>

        {reportObj && (
          <ReportDetail
            reportObj={reportObj}
            closeModal={() => setReportObj(null)}
          />
        )}
        <div className="overflow-x-auto w-full bg-white rounded-[4px] mt-4 shadow-[0px_2px_3px_rgba(0,0,0,0.07)]">
          <table className="custom-table SellsFinancial-table table-fixed w-full">
            <thead>
              <tr>
                <th>شماره رزرو کننده</th>
                <th>شماره پرواز</th>
                <th>نام آژانس</th>
                <th>تاریخ رزرو</th>
                <th>تعداد بزرگسال</th>
                <th>تعداد کودک</th>
                <th>تعداد نوزاد</th>
                <th>شهر مبدا</th>
                <th>شهر مقصد</th>
                <th className="w-[150px]">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {data?.result.map(
                (item: reserveObj, index: number) => {
                  return (
                    <tr
                      key={JSON.stringify(item)}
                      className={`${
                        index % 2 === 1
                          ? "bg-white"
                          : "bg-[#e5e3e7]"
                      }`}
                    >
                      <td>{item.reserverMobile}</td>
                      <td>{item.flightNo}</td>
                      <td>{item.tmsName}</td>
                      <td>{item.shamsiReserveDate}</td>
                      <td>{item.adultQty}</td>
                      <td>{item.childQty}</td>
                      <td>{item.infantQty}</td>
                      <td>{item.srCity}</td>
                      <td>{item.dcCity}</td>
                      <td>
                        {" "}
                        <button
                          className="dialog-content__button btn bg-[#3498db] hover:bg-[#3498db]"
                          onClick={() => setReportObj(item)}
                        >
                          نمایش جزئیات
                        </button>
                      </td>
                    </tr>
                  );
                }
              )}
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
            onPageChange={(e: any) =>
              setPage(e.selected + 1)
            }
            pageRangeDisplayed={reportTablePageSize}
            pageCount={data?.count / reportTablePageSize}
            className="w-[500px] flex justify-between border-1 border-[#3498db] rounded-[4px]"
            activeClassName="bg-[#3498db] border-1 border-[#3498db] rounded-[4px] px-3 text-[#fff]"
            disableInitialCallback={page === 1}
            disabledClassName="text-[#8080805e]"
          />
          <select
            className="bg-[#3498db] text-[#fff] rounded mx-3"
            onChange={(e) => {
              setPage(1);
              setReportTablePageSize(
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

export default SellsFinancial;
