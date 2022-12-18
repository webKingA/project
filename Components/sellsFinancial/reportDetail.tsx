import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { reserveObj } from "../../interface/report.interface";
import { formatPriceToIRR } from "../../utils/formatPriceToIRR";

interface IProps {
  reportObj: reserveObj;
  closeModal: () => void;
}

const ReportDetail = (props: IProps) => {
  const { reportObj, closeModal } = props;

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
                    <th>نام کاربری</th>
                    <th>موبایل</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{reportObj.userName}</td>
                    <td>{reportObj.reserverMobile}</td>
                  </tr>
                </tbody>
              </table>
             <p className="mt-5">گزارش</p>
              <table className="custom-table flight-table table-fixed w-full mt-5">
                <thead  className="bg-primary bg-opacity-[0.15]">
                  <tr>
                   
                    <th>مقدار تراکنش</th>
                    <th>میزان تخفیف</th>
                    <th>سهم پروایدر</th>
                    <th>سهم کانترکاونر</th>
					<th>سهم هاب</th>
					<th>سهم آژانس</th>
					<th>سهم کاربر تجاری</th>
					<th>سهم کاربر</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>{formatPriceToIRR(reportObj?.realAmount)}</td>
                    <td>{formatPriceToIRR(reportObj?.discountAmount)}</td>
                    <td>{formatPriceToIRR(reportObj?.spPortionAmount)}</td>
                    <td>{formatPriceToIRR(reportObj.coPortionAmount)}</td>
					<th>{formatPriceToIRR(reportObj.hubPortionAmount)}</th>
					<th>{formatPriceToIRR(reportObj.tmsPortionAmount)}</th>
					<th>{formatPriceToIRR(reportObj.coWorkerPortionAmount)}</th>
					<th>{formatPriceToIRR(reportObj.userPortionAmount)}</th>
				  </tr>
                </tbody>
              </table>
              <table className="custom-table flight-table table-fixed w-full mt-5">
                <thead className="bg-primary bg-opacity-[0.15]">
                  <tr>
                    <th>نام پروایدر</th>
                    <th>نام کانترکت اونر</th>
                    <th>نام آژانس</th>
                    <th>cwName</th>
                    <th>نوع ارز</th>
                    <th>نوع پرداخت</th>
                    <th>نوع تراکنش</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{reportObj?.providerName}</td>
                    <td>{reportObj?.coName}</td>
                    <td>{reportObj?.tmsName}</td>
                    <td>{reportObj?.cwName}</td>
                    <td>{reportObj?.currencyValue}</td>
                    <td>{reportObj?.paymentTypeValue}</td>
                    <td>{reportObj?.reserveTransactionTypeValue}</td>
                  </tr>
                </tbody>
              </table>
              <table className="custom-table flight-table table-fixed w-full mt-5">
                <thead  className="bg-primary bg-opacity-[0.15]">
                  <tr>
					<th>شماره پرواز</th>
                    <th>وضعیت رزرو</th>
					<th>تاریخ رزرو</th>
					<th>تاریخ رفت</th>
					<th>مبدا</th>
					<th>مقصد</th>
                    <th>تعداد بزرگسال</th>
                    <th>تعداد کودک</th>
                    <th>تعداد نوزاد</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{reportObj?.flightNo}</td>
                    <td>{reportObj?.reserveStatus}</td>
					<td>{reportObj.reserveDate}</td>
                    <td>{reportObj?.shamsiSrcFlightDate}</td>
                    <td>{reportObj?.srCity}</td>
                    <td>{reportObj?.dcCity}</td>
                    <td>{reportObj?.adultQty}</td>
                    <td>{reportObj?.childQty}</td>
                    <td>{reportObj?.infantQty}</td>
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

export default ReportDetail;
