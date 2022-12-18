import React from "react";
import { useSearchParams } from "react-router-dom";
import useGetFlightPassengerss from "../../hooks/internalFlightReserves/useGetFlightPassengerss";
import { IFlightPassengers } from "../../interface/flightPassengersList.interface";
import { formatPriceToIRR } from "../../utils/formatPriceToIRR";

const DetailFlightReserve = () => {
  let [searchParams, setSearchParams] = useSearchParams("");
  const flightReserveObj = useGetFlightPassengerss(searchParams.get("id"));
  console.log(flightReserveObj);
  return (
    <div className="w-full h-full px-7">
      {flightReserveObj?.data?.flightPassengersList.map(
        (item: IFlightPassengers) => {
          return (
            <div className="w-full overflow-hidden bg-[#fff] m-7 p-5 drop-shadow-[0px_2px_3px_rgba(0,0,0,0.07)] rounded-[4px]">
              <table className="custom-table flight-table table-fixed w-full ">
                <thead className="bg-primary bg-opacity-[0.15]">
                  <tr>
                    <th>شماره پیگیری</th>
                    <th>وضعیت</th>
                    <th>پرداختی</th>
                    <th>isConflictCustomer </th>
                    <th>isConflictCredit </th>
                    <th>isConflictProvider </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{item.ticketNumber}</td>
                    <td>{item.status}</td>
                    <td>{formatPriceToIRR(item.paymentAmount)}</td>
                    <td>{item.isConflictCustomer ? "	بلی" : "خیر"}</td>
                    <td>{item.isConflictCredit ? "	بلی" : "خیر	"}</td>
                    <td>{item.isConflictProvider ? "بلی" : "خیر"}</td>
                  </tr>
                </tbody>
              </table>
			  <p className="my-5">مشخصات مسافر :</p>
              <table className="custom-table flight-table table-fixed w-full ">
                <thead className="bg-primary bg-opacity-[0.15]">
                  <tr>
                    {item.customerPassenger.identitytType === "کد ملی" ? (
                      <>
                        <th>نام </th>
                        <th>نام خانوادگی</th>
                        <th>کد ملی </th>
                        <th>تاریخ تولد </th>

                      </>
                    ) : (
                      <>
                        <th>نام </th>
                        <th>نام خانوادگی</th>
                        <th>تاریخ تولد </th>
                        <th>شماره پاسپورت</th>
                        <th>تاریخ انقضای پاسپورت</th>
                        <th>کشور</th>
                        <th>پاسپورت گشور</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {item.customerPassenger.identitytType === "کد ملی" ? (
                      <>
                        <td>{item.customerPassenger.name}</td>
                        <td>{item.customerPassenger.lastName}</td>
                        <td>{item.customerPassenger.nationalNumber}</td>
                        <td>{item.customerPassenger.dateOfBirth.split(" ") && item.customerPassenger.dateOfBirth.split(" ")[0]}</td>

                      </>
                    ) : (
                      <>
                        <td>{item.customerPassenger.latinFirstName}</td>
                        <td>{item.customerPassenger.latinLastName}</td>
                        <td>{item.customerPassenger.miladiDatoOfBirth}</td>
                        <td>{item.customerPassenger.passportNumber}</td>
                        <td>{item.customerPassenger.passportExpireDate}</td>
                        <td>{item.customerPassenger.birthDayCountry}</td>
                        <td>{item.customerPassenger.passportCountry}</td>
                      </>
                    )}
                  </tr>
                </tbody>
              </table>

              <table className="custom-table flight-table table-fixed w-full ">
                <thead className="bg-primary bg-opacity-[0.15]">
                  <tr>
                    <th>جنسیت</th>
                    <th>سن </th>
                    <th>شماره موبایل </th>
                    <th>شماره تلفن </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{item.customerPassenger.gender}</td>
                    <td>{item.customerPassenger.age}</td>
                    <td>{item.customerPassenger.mobileNumber}</td>
                    <td>{item.customerPassenger.telNumber}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
      )}
    </div>
  );
};

export default DetailFlightReserve;
