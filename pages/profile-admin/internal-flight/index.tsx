import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DatePicker, {
  DateObject,
} from "react-multi-date-picker";

import persian from "react-date-object/calendars/persian";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import {
  HiddenTd,
  listReserveStatus,
  PERSIAN_LOCAL,
  TitleOfTabel,
} from "../../../interface/enum";
import DataTabel from "../../../Components/internalFlightReserves/Tabel";
import { IinternalFlightObj } from "../../../interface/internalFlightReserve2";
import useSearchFlightReserve from "../../../hooks/internalFlightReserves/useSearchFlightReserve";
import useGetFlightReserve from "../../../hooks/internalFlightReserves/useGetFlightReserve";
import { useRouter } from "next/router";
import LayoutAdmin from "../../../Components/LayoutAdmin";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface IProps {}

interface IForm {
  reserveStatus: string;
  trackingNumber: string;
  reserverMobile: string;
  srcFlightDate: string;
  desFlightDate: string;
  flightNo: string;
  fk_SrcCityId: string;
  fk_DestCityId: string;
  startReserveDate: string;
  endReserveDate: string;
  reserveDate: string;
}

const FlightsManagment: React.FC<IProps> = () => {
  const [reserveTablePageSize, setReserveTablePageSize] =
    useState(5);
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetFlightReserve(
    page,
    reserveTablePageSize
  );
  const [loader, setLoder] = useState(false);
  const router = useRouter();
  const [stateDataForm, setStateDataForm] =
    useState<IForm>();

  const form = useForm<IForm>({
    // resolver: yupResolver(aclSchema),
  });
  const {
    register,
    handleSubmit,
    formState,
    reset,
    clearErrors,
  } = form;

  const searchFlightReserveHook = useSearchFlightReserve();

  const [dateForSearch, setDateForSearch] = useState("");

  let [startReserveDate, setStartReserveDate] =
    useState<null | DateObject>(null);
  let [endReserveDate, setEndReserveDate] =
    useState<null | DateObject>(null);

  let [srcFlightDate, setSrcFlightDate] =
    useState<null | DateObject>(null);
  let [desFlightDate, setDesFlightDate] =
    useState<null | DateObject>(null);

  const ref: any = useRef();
  const onSubmit = async (
    dataForm: IForm,
    pageProps: number
  ) => {
    setStateDataForm(dataForm);
    setLoder(true);
    searchFlightReserveHook.mutate({
      reserveStatus:
        dataForm.reserveStatus === "noSelect"
          ? null
          : dataForm.reserveStatus,
      trackingNumber: dataForm.trackingNumber
        ? dataForm.trackingNumber
        : null,
      reserverMobile: dataForm.reserverMobile
        ? dataForm.reserverMobile
        : null,
      srcFlightDate: srcFlightDate
        ? srcFlightDate.toString().split(" ")[0]
        : null,
      desFlightDate: desFlightDate
        ? desFlightDate.toString().split(" ")[0]
        : null,
      flightNo: dataForm.flightNo
        ? dataForm.flightNo
        : null,
      pageNumber: pageProps,
      pageSize: reserveTablePageSize,
      isConflictCancelSeat: false,
      isConflictCredit: false,
      isConflictCustomer: false,
      fk_SrcCityId: null,
      fk_DestCityId: null,
      startReserveDate: startReserveDate
        ? startReserveDate.toString().split(" ")[0]
        : null,
      endReserveDate: endReserveDate
        ? endReserveDate.toString().split(" ")[0]
        : null,
      reserveDate: null,
      callBack: (res: any) => {
        console.log("resssssssssssss", res);
        if (res) {
          for (let i = 0; i < res.length; i++) {
            toast.error(res[i]);
            console.log("------------------->>>>", res[i]);
          }
        }
        setLoder(false);
      },
    });
  };

  const arangementData = (data: IinternalFlightObj[]) => {
    console.log("data", data);
    let temp = [];
    for (let i = 0; i < data.length; i++)
      temp.push({
        id: data[i].id,
        reserverMobile: data[i].reserverMobile,
        shamsiReserveDate: data[i].shamsiReserveDate,
        reserveStatus: data[i].reserveStatus,
        totalPayment: data[i].totalPayment,
        airlineName: data[i].airlineName,
        cabinClass: data[i].cabinClass,
        srCity: data[i].srCity,
        dcCity: data[i].dcCity,
        shamsiSrcFlightDate: data[i].shamsiSrcFlightDate,
        shamsiDesFlightDate: data[i].shamsiDesFlightDate,
        trackingNumber: data[i].trackingNumber,
      });
    return temp;
  };

  useEffect(() => {
    if (stateDataForm) onSubmit(stateDataForm, page);
  }, [reserveTablePageSize]);
  console.log(data?.result);
  return (
    <LayoutAdmin>
      <div className="w-full bg-[#fff] p-3 rounded mb-[30px]">
        <form
          className="edit-category__form modal-box__form  font-yekan-bold  items-center justify-between "
          onSubmit={handleSubmit((e: any) =>
            onSubmit(e, page)
          )}
        >
          <div>
            <span className="whitespace-nowrap text-sm">
              وضعیت رزرو
            </span>
            <select
              {...register("reserveStatus")}
              id="user-edit-role"
              className="dialog-content__select rounded-lg select select-bordered w-[150px] mt-[10px] mx-2"
            >
              <option
                className="bg-base-200 text-white"
                // disabled={true}
                key={""}
                value={"noSelect"}
              >
                انتخاب
              </option>
              {listReserveStatus.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>

            <span className="whitespace-nowrap text-sm">
              شماره پیگیری
            </span>
            <input
              id="user-create-id"
              {...register("trackingNumber")}
              type="text"
              placeholder="شماره پیگیری را وارد کنید"
              className="dialog-content__Input input rounded-lg input-bordered w-[190px] mt-[10px] mb-[10px] mx-2"
            />
            <span className="whitespace-nowrap text-sm">
              موبایل رزرو کننده
            </span>
            <input
              id="user-create-id"
              {...register("reserverMobile")}
              type="text"
              placeholder="موبایل رزرو کننده را وارد کنید"
              className="dialog-content__Input rounded-lg input input-bordered w-[190px] mt-[10px] mb-[10px] mx-2"
            />

            <span className="whitespace-nowrap text-sm">
              شماره پرواز
            </span>
            <input
              id="user-create-id"
              {...register("flightNo", {})}
              type="text"
              placeholder="شماره پرواز را وارد کنید"
              className="dialog-content__Input rounded-lg input input-bordered w-[190px] mt-[10px] mb-[10px] mx-2"
            />
          </div>

          <div className="flex items-center">
            بر اساس تاریخ
            <select
              id="user-edit-role"
              className="dialog-content__select rounded-lg select select-bordered w-[190px] mt-[10px] mx-2"
              onChange={(e: any) => {
                setDateForSearch(e.target.value);
                setStartReserveDate(null);
                setEndReserveDate(null);
                setSrcFlightDate(null);
                setDesFlightDate(null);
              }}
            >
              <option className="bg-base-200 text-white">
                انتخاب
              </option>
              <option
                className="bg-base-200 text-white"
                key={""}
                value={"سفارش"}
              >
                ثبت سفارش
              </option>
              <option
                className="bg-base-200 text-white"
                key={"1"}
                value={"سفر"}
              >
                سفر{" "}
              </option>
            </select>
            {dateForSearch === "سفارش" && (
              <>
                <span className="whitespace-nowrap text-sm ml-2">
                  تاریخ شروع سفارش
                </span>
                <DatePicker
                  format="YYYY/MM/DD"
                  calendar={persian}
                  locale={PERSIAN_LOCAL}
                  value={startReserveDate}
                  onChange={(value: any) => {
                    if (value) {
                      console.log(value.toString());
                      setStartReserveDate(value.toString());
                    } else setStartReserveDate(null);
                  }}
                  style={{ height: "2.5rem" }}
                />
                <span className="whitespace-nowrap text-sm mx-2">
                  تاریخ پایان سفارش
                </span>
                <DatePicker
                  ref={ref}
                  format="YYYY/MM/DD"
                  calendar={persian}
                  locale={PERSIAN_LOCAL}
                  value={endReserveDate}
                  onChange={(value: any) => {
                    if (value) {
                      console.log(value.toString());
                      setEndReserveDate(value.toString());
                    } else setEndReserveDate(null);
                  }}
                  style={{ height: "2.5rem" }}
                />
              </>
            )}
            {dateForSearch === "سفر" && (
              <>
                <span className="whitespace-nowrap text-sm ml-2">
                  تاریخ پرواز رفت
                </span>
                <DatePicker
                  format="YYYY/MM/DD"
                  calendar={persian}
                  locale={PERSIAN_LOCAL}
                  value={srcFlightDate}
                  onChange={(value: any) => {
                    if (value) {
                      console.log(value.toString());
                      setSrcFlightDate(value.toString());
                    } else setSrcFlightDate(null);
                  }}
                  style={{ height: "2.5rem" }}
                />
                <span className="whitespace-nowrap text-sm mx-2">
                  تاریخ پرواز برگشت
                </span>
                <DatePicker
                  ref={ref}
                  format="YYYY/MM/DD"
                  calendar={persian}
                  locale={PERSIAN_LOCAL}
                  value={desFlightDate}
                  onChange={(value: any) => {
                    if (value) {
                      console.log(value.toString());
                      setDesFlightDate(value.toString());
                    } else setDesFlightDate(null);
                  }}
                  style={{ height: "2.5rem" }}
                />
              </>
            )}
          </div>

          <div className="modal-action mt-8">
            <button
              className="btn btn-[#3498db] w-32"
              type="submit"
            >
              جستجو
              {loader && <div className="spinner mr-2" />}
            </button>
          </div>
        </form>
      </div>

     

      {data?.result?.length ? (
        <div className="w-full font-yekan-bold text-xs flex  mt-5  bg-[#fff] ">
          <div className="w-full overflow-auto">
            <DataTabel
              dataProps={arangementData(data.result)}
              HiddenTd={HiddenTd}
              TitleOfTabel={TitleOfTabel}
              onclickRow={(e: any) => {
                router.push(
                  `/profile-admin/internal-flight/${data.result[e].id}`
                );
              }}
            />
          </div>
        </div>
      ) : null}


{data && data.count && (
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
            onPageChange={(e: any) =>
              setPage(e.selected + 1)
            }
            pageRangeDisplayed={5}
            pageCount={data?.count / reserveTablePageSize}
            className="w-[500px] flex justify-between border-1 border-[#3498db] rounded-[4px]"
            activeClassName="bg-[#3498db] border-1 border-[#7446B2] rounded-[4px] px-3 text-[#fff]"
            disableInitialCallback={page === 1}
            disabledClassName="text-[#8080805e]"
          />
          <select
            className="bg-[#3498db] text-[#fff] rounded mx-3"
            onChange={(e) => {
              setPage(1);
              setReserveTablePageSize(
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
      )}
    </LayoutAdmin>
  );
};

export default FlightsManagment;
