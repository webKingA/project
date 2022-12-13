import * as React from "react";
import Select, { components } from "react-select";
import style from "./PartOne.module.css";
import Citys from "../.././../public/provincelists.json";
import { customStyles } from "../../../utils/styles";
// Create rtl cache

interface Props {
  value: any;
  setValue: any;
  placeholder:string,
  cities:{}[]
}
export default function MenuList({
  value,
  setValue,
  placeholder,
  cities
}: Props) {
  const Placeholder = (props: any) => {
    return <components.Placeholder {...props} />;
  };


  // @ts-ignore
  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span
          style={{
            fontSize: "0.77rem",
            fontWeight: "bold",
          }}
        >
          لطفا انتخاب نمایید
        </span>
      </components.NoOptionsMessage>
    );
  };

  return (
    <Select
      defaultInputValue=""
      value={value}
      onChange={(value) => setValue(value)}
      // @ts-ignore
      options={cities}
      getOptionLabel={(option: any) => option.name}
      getOptionValue={(option: any) => option.id}
      components={{ Placeholder, NoOptionsMessage }}
      placeholder={placeholder}
      styles={customStyles}
      isRtl={true}
      className={style.react_select_menu}
    />
  );
}
