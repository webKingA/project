import React, { useState } from "react";
import style from "./index.module.css";

// import Icons Start

import { RiFileHistoryFill } from "react-icons/ri";
import { BiFilter } from "react-icons/bi";
import { MdDownload } from "react-icons/md";

// import Icons End

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import TextField from "@mui/material/TextField";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Parttwo() {
  const [showEditPart, setShowEditPart] = useState(true);
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <section className={style.transection}>
      <div>
        <span>
          <RiFileHistoryFill />
          تاریخچه تراکنش‌ها و درخواست‌ها
        </span>
      </div>
      <div>
        <span>
          <ButtonGroup
            style={{ border: "1px solid rgba(0 , 0 , 0 , .1)", padding: "5px" }}
            aria-label="outlined primary button group"
          >
            <Button
              variant="text"
              style={{
                width: "12rem",
                padding: "10px",
                display: "flex",
                gap: "10px",
                fontFamily: "v",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              تراکنش ها
            </Button>
            <Button
              variant="text"
              style={{
                width: "14rem",
                padding: "10px",
                display: "flex",
                gap: "10px",
                fontFamily: "v",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              درخواست انتقال موجودی
            </Button>
          </ButtonGroup>
        </span>
        <span>
          <Button
            variant="text"
            startIcon={<BiFilter />}
            style={{
              width: "10rem",
              padding: "10px",
              display: "flex",
              gap: "10px",
              fontFamily: "v",
              fontSize: "16px",
            }}
            onClick={() => setShowEditPart(!showEditPart)}
          >
            فیلتر
          </Button>
          <Button
            variant="text"
            startIcon={<MdDownload />}
            style={{
              width: "10rem",
              padding: "10px",
              display: "flex",
              gap: "10px",
              fontFamily: "v",
              fontSize: "16px",
            }}
          >
            خروجی اکسل
          </Button>
        </span>
      </div>
      {showEditPart && (
        <div className={style.editpart}>
          <div>
            <span>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  style={{fontFamily : "k"}}
                >
                  <MenuItem style={{fontFamily : "v"}} value={1}>متن تستی 1</MenuItem>
                  <MenuItem style={{fontFamily : "v"}} value={2}>متن تستی 2</MenuItem>
                  <MenuItem style={{fontFamily : "v"}} value={3}>متن تستی 3</MenuItem>
                </Select>
              </FormControl>
            </span>
            <span>
              <TextField id="outlined-basic" label="شروع" variant="outlined" />
              <TextField id="outlined-basic" label="پایان" variant="outlined" />
            </span>
            <span>
              <TextField id="outlined-basic" label="از" variant="outlined" />
              <TextField id="outlined-basic" label="تا" variant="outlined" />
            </span>
          </div>
          <div>
            <Button
              variant="text"
              style={{
                width: "12rem",
                padding: "10px",
                display: "flex",
                gap: "10px",
                fontFamily: "v",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              حذف فیلترها
            </Button>
          </div>
        </div>
      )}
      <div>
        <img src="/images/payment-error-1170e149.svg" alt="" />
        <p>هیچ تراکنشی یافت نشد</p>
      </div>
    </section>
  );
}
