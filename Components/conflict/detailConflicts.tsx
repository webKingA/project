import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import useFindflightreserves from "../../hooks/confilict/useFindflightreserves";
import { IConflict } from "../../interface/confilict.interface";
import { ClipboardCopy } from "../../public/svg";
import { formatPriceToIRR } from "../../utils/formatPriceToIRR";

interface IProps {
  conflictObj: IConflict;
  closeModal: () => void;
}

const DetailConflicts = (props: IProps) => {
  const { conflictObj, closeModal } = props;
  const flightReserve = useFindflightreserves(
    conflictObj.id
  );
  console.log("----", flightReserve);
  return (
    <div className="add-user-dialog dialog-content">
      <div
        role="button"
        tabIndex={0}
        className={`dialog-content__modal modal cursor-default modal-open`}
        onClick={() => {
          closeModal();
        }}
      >
        <div
          role="button"
          tabIndex={0}
          className={"modal overflow-auto modal-open "}
        >
          <div
            onClick={(e) => {
              return e.stopPropagation();
            }}
            className="modal-box max-w-[1430px] max-h-[652px] p-0 overflow-hidden text-right"
          >
            <div className="overflow-auto modal-box  max-w-[1430px] max-h-[652px]">
              مشخصات رزرو کننده
              <table className="w-[350px] custom-table flight-table table-fixed mt-5">
                <thead>
                  <tr>
                    <th>ایمیل</th>
                    <th>موبایل</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {flightReserve?.data?.reserverEmail}
                    </td>
                    <td>
                      {flightReserve?.data?.reserverMobile}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-5">
                وضعیت : {conflictObj.reserveStatus}
              </p>
              <table className="custom-table flight-table table-fixed w-full mt-5">
                <thead className="bg-[#3498db] ">
                  <tr>
                    <th>تاریخ رزرو</th>
                    <th>شماره پرواز</th>
                    <th>مبدا</th>
                    <th>مقصد</th>
                    <th>تاریخ رفت</th>
                    <th>تاریخ برگشت</th>
                    <th>شماره پیگیری</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {flightReserve?.data?.reserveDate}
                    </td>
                    <td>{flightReserve?.data?.flightNo}</td>
                    <td>{flightReserve?.data?.srcCity}</td>
                    <td>{flightReserve?.data?.destCity}</td>
                    <td>
                      {flightReserve?.data?.srcFlightDate}
                    </td>
                    <td>
                      {flightReserve?.data?.desFlightDate}
                    </td>
                    <td className="flex">
                      {flightReserve?.data?.trackingNumber}
                      <CopyToClipboard
                        text={
                          flightReserve?.data
                            ?.trackingNumber
                        }
                        onCopy={() => {
                          toast.success(
                            "کپی با موفقیت انجام شد"
                          );
                        }}
                      >
                        <button>
                          <ClipboardCopy className="w-6 h-6 mr-4" />
                        </button>
                      </CopyToClipboard>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="custom-table flight-table table-fixed w-full mt-5">
                <thead className="bg-primary bg-opacity-[0.15]">
                  <tr>
                    <th>pnr</th>
                    <th>نام آژانس</th>
                    <th>نام ایرلاین</th>
                    <th>نام مالک قرار داد</th>
                    <th>نام پروایدر</th>
                    <th>توضیحات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{flightReserve?.data?.pnr}</td>
                    <td>{flightReserve?.data?.tmsName}</td>
                    <td>
                      {flightReserve?.data?.airLineName}
                    </td>
                    <td>
                      {
                        flightReserve?.data
                          ?.contractOwnerName
                      }
                    </td>
                    <td>
                      {
                        flightReserve?.data
                          ?.serviceProviderName
                      }
                    </td>
                    <td>
                      {flightReserve?.data?.description}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="custom-table flight-table table-fixed w-full mt-5">
                <thead className="bg-primary bg-opacity-[0.15]">
                  <tr>
                    <th>تعداد بزرگسال</th>
                    <th>تعداد کودک</th>
                    <th>تعداد نوزاد</th>
                    <th>قیمت بزرگسال</th>
                    <th>قیمت کودک</th>
                    <th>قیمت نوزاد</th>
                    <th>discount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{flightReserve?.data?.adultQty}</td>
                    <td>{flightReserve?.data?.childQty}</td>
                    <td>
                      {flightReserve?.data?.infantQty}
                    </td>
                    <td>
                      {formatPriceToIRR(
                        flightReserve?.data?.adultTotalPrice
                      )}
                    </td>
                    <td>
                      {formatPriceToIRR(
                        flightReserve?.data?.childTotalPrice
                      )}
                    </td>
                    <td>
                      {formatPriceToIRR(
                        flightReserve?.data
                          ?.infantTotalPrice
                      )}
                    </td>
                    <td>{flightReserve?.data?.discount}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailConflicts;
