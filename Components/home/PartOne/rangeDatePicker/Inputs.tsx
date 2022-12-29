import styles from "./rangeDatePicker.module.scss";

interface IProps {
  dateType: any;
  type: "oneway" | "twoway";
  onActiveReturningDate: () => void;
  value: string | string[];
}

/**
 * @description
 * فیلدهای ورودی برای تاریخ رفت و برگشت
 */
const Inputs = ({
  value,
  dateType,
  onActiveReturningDate,
  type,
  ...other
}: IProps) => {
  const from = value[0] || "";
  const to = value[1] || "";

  const { openCalendar } = other as any;

  const inputPlaceHolder_departing =
    dateType === "persian" ? "رفت" : "Departing";
  const inputPlaceHolder_returning =
    dateType === "persian" ? "برگشت" : "Returning";

  return (
    <>
      <div className="flex ">
        <input
          name="departing"
          onFocus={openCalendar}
          value={type === "oneway" ? value : from}
          placeholder={inputPlaceHolder_departing}
          readOnly
          className={`font-yekan-regular ${styles.input}`}
        />
        {type === "oneway" ? (
          <p
            className={`js-date-input w-[160px] border-start-0 disabled border-top-right-radius[0px] border-bottom-right-radius[0px] ${styles.input} ${styles.disabled}`}
            onClick={() => {
              onActiveReturningDate();
              openCalendar();
            }}
          >
            برگشت
          </p>
        ) : (
          <input
            name="returning"
            onFocus={openCalendar}
            value={to}
            placeholder={inputPlaceHolder_returning}
            readOnly
            className={`font-yekan-regular ${styles.input}`}
          />
        )}
      </div>
    </>
  );
};

export default Inputs;
