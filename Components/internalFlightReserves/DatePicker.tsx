import React, { useEffect, useRef, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import { PERSIAN_LOCAL } from "../../interface/enum";

interface IProps {
	sendDate:any;
}

const DatePickerDialog = (props: IProps) => {
  const { sendDate } = props;
  const [open, setOpen] = useState(false);
  let [date, setDate] = useState<null | DateObject >(new DateObject());
  const ref: any = useRef();
  const toggleOpen = () => {
    setOpen(!open);
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
        <span className="block leading-3 text-primary">{date && date.toString() ? date.toString() : "انتخاب تاریخ"}</span>
      </button>
      <div
        role="button"
        tabIndex={0}
        onClick={(e) => {
          return e.stopPropagation();
        }}
        className={`modal overflow-auto ${open ? "modal-open" : ""}`}
      >
        <div className="modal-box p-0 overflow-hidden text-right ">
          <div className="overflow-auto modal-box h-[400px]">
            <DatePicker
			  ref={ref}
              format="MM/DD/YYYY HH:mm:ss"
              calendar={persian}
              locale={PERSIAN_LOCAL}
              value={date}
              onChange={(value: any) => {
                console.log(value.toString());
				setDate(value.toString())
              }}

            />
            <div className="modal-action " style={{position:"relative",bottom:"-270px"}}>
			<button
                className="btn btn-primary w-32"
                type="submit"
                  onClick={(e) => {
                    e.preventDefault();
					setDate(null);
					sendDate(null);
                     return toggleOpen();
                  }}
              >
                کنسل
              </button>
              <button
                className="btn btn-primary w-32"
                type="submit"
                  onClick={(e) => {
                    e.preventDefault();
					sendDate(date);
                     return toggleOpen();
                  }}
              >
                انتخاب
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePickerDialog;
