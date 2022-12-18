import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DatePickerDialog from "./DatePicker";
import useSearchFlightReserve from "../../hooks/internalFlightReserves/useSearchFlightReserve";

interface IProps {}

interface IForm {
  reserveStatus: string;
  trackingNumber: string;
  reserverMobile: string;
  srcFlightDate: string;
  desFlightDate: string;
  flightNo: string;
}

const AdvanceSearch = (props: IProps) => {
  const [open, setOpen] = useState(false);
  let [srcFlightDate, setSrcFlightDate] = useState(null)
  let [desFlightDate, setDesFlightDate] = useState(null)
  const datePickerRef:any = useRef()
  const form = useForm<IForm>({
    // resolver: yupResolver(aclSchema),
  });
  const { register, handleSubmit, formState, reset, clearErrors } = form;
  const { errors } = formState;
  const searchFlightReserveHook = useSearchFlightReserve();

  const toggleOpen = () => {
    setOpen(!open);
  };

  const onCancel =  async () => {
    // await searchFlightReserveHook.mutate({
	// 	reserveStatus: null,
	// trackingNumber: null,
	// reserverMobile: null,
	// srcFlightDate: null,
	// desFlightDate: null,
	// flightNo: null,
	// pageNumber:0,
	// 	pageSize:0,
    //   callBack: (res:any) => {
    // 	if(res){
    // 		for(let i=0;i<res.length;i++){
    // 			toast.error(res[i]);
    // 			console.log("------------------->>>>",res[i])
    // 		}
    // 	}else{
    // 		toggleOpen();
    // 	}
    //   },
    // });
  };

  const onSubmit = async (dataForm: IForm) => {
	// console.log(dataForm, srcFlightDate, desFlightDate)
    // console.log(dataForm)
    // await searchFlightReserveHook.mutate({
    //   ...dataForm,
	//   pageNumber:0,
	// 	pageSize:0,
    //   callBack: (res:any) => {
    // 	if(res){
    // 		for(let i=0;i<res.length;i++){
    // 			toast.error(res[i]);
    // 			console.log("------------------->>>>",res[i])
    // 		}
    // 	}else{
    // 		toggleOpen();
    // 	}
    //   },
    // });
  };


  return (
    <div className="ml-5">
      <button
        className="dialog-content__button btn bg-primary bg-opacity-[0.15] hover:bg-opacity-[0.15] hover:bg-primary mr-2"
        onClick={() => {
          toggleOpen();
        }}
      >
        <span className="block h-4" />
        <span className="block leading-3 text-primary">جستجوی پیشرفته</span>
      </button>
      <div
        role="button"
        tabIndex={0}
        onClick={(e) => {
          return e.stopPropagation();
        }}
        className={`modal overflow-auto ${open ? "modal-open" : ""}`}
      >
        <div className="modal-box p-0 overflow-hidden text-right">
          <div className="overflow-auto modal-box">
            <form
              className="edit-category__form modal-box__form mt-10 flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="user-create-id">وضعیت رزرو</label>
              <input
                id="user-create-id"
                {...register("reserveStatus")}
                type="text"
                placeholder="وضعیت رزرو را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px] mb-[10px]"
              />
              <label htmlFor="user-create-id">شماره پیگیری</label>
              <input
                id="user-create-id"
                {...register("trackingNumber")}
                type="text"
                placeholder="شماره پیگیری را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px] mb-[10px]"
              />

              <label htmlFor="user-create-id">موبایل رزرو کننده</label>
              <input
                id="user-create-id"
                {...register("reserverMobile")}
                type="text"
                placeholder="موبایل رزرو کننده را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px] mb-[10px]"
              />

              <label htmlFor="user-create-id">شماره پرواز</label>
              <input
                id="user-create-id"
                {...register("flightNo", {
                  
                })}
                type="text"
                placeholder="شماره پرواز را وارد کنید"
                className="dialog-content__Input input input-bordered w-full mt-[10px] mb-[10px]"
              />
{/* 
              <label htmlFor="user-create-id ">تاریخ پرواز رفت</label>
			  <DatePickerDialog sendDate={(e:any)=>{setSrcFlightDate(e)}}/>


              <label htmlFor="user-create-id" style={{marginBottom:"10px", marginTop:"10px"}}>تاریخ پرواز برگشت</label>
			  <DatePickerDialog sendDate={(e:any)=>{setDesFlightDate(e)}}/> */}

              <div className="modal-action mt-8">
                {/* {searchHook.isLoading ? (
                  <div className="spinner" />
                ) : ( */}
                <>
                  <button
                    className="btn btn-primary btn-outline ml-4 w-32"
                    type="button"
                    onClick={() => {
						onCancel();
                    }}
                  >
                    انصراف
                  </button>
                  <button
                    className="btn btn-primary w-32"
                    type="submit"
                    //   onClick={(e) => {
                    //     e.preventDefault();
                    //      return toggleOpen();
                    //   }}
                  >
                    جستجو
                  </button>
                </>
                {/* )} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceSearch;
