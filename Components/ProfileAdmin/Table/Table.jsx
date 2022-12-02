import React from "react";
import style from "./Table.module.css";

// import Mui Start

import Pagination from "@mui/material/Pagination";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// import Mui End

// import Icons Start

import { AiOutlinePlus } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";

// import Icons End

const Table = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className={style.table__container}>
      <div className={style.pagination__container}>
        <Pagination count={10} color="primary" />
      </div>
      <div className={style.information__table}>
        <table>
          <thead className={style.thead}>
            <th>
              <tr>نام کاربر</tr>
              <tr>نام کاربری</tr>
              <tr>موبایل</tr>
              <tr>وضعیت</tr>
              <tr>عملیات</tr>
            </th>
          </thead>
          <tbody className={style.tbody}>
            <td>
              <tr>null null</tr>
              <tr>09120148604</tr>
              <tr> 09120148604</tr>
              <tr>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography>Off</Typography>
                  <Switch {...label} defaultChecked />
                  <Typography>On</Typography>
                </Stack>
              </tr>
              <tr>
                <Button
                  variant="text"
                  startIcon={<AiOutlinePlus />}
                  style={{
                    padding: "10px",
                    fontFamily: "v",
                    fontSize: "16px",
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  انتصاب نقش
                </Button>
                <Button
                  variant="contained"
                  startIcon={<GrEdit />}
                  style={{
                    padding: "5px 15px",
                    fontFamily: "v",
                    fontSize: "16px",
                    display: "flex",
                    gap: "1rem",
                    backgroundColor: "#654fef",
                  }}
                >
                  ویرایش
                </Button>
              </tr>
            </td>
            <td>
              <tr>null null</tr>
              <tr>09120148604</tr>
              <tr> 09120148604</tr>
              <tr>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography>Off</Typography>
                  <Switch {...label} defaultChecked />
                  <Typography>On</Typography>
                </Stack>
              </tr>
              <tr>
                <Button
                  variant="text"
                  startIcon={<AiOutlinePlus />}
                  style={{
                    padding: "10px",
                    fontFamily: "v",
                    fontSize: "16px",
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  انتصاب نقش
                </Button>
                <Button
                  variant="contained"
                  startIcon={<GrEdit />}
                  style={{
                    padding: "5px 15px",
                    fontFamily: "v",
                    fontSize: "16px",
                    display: "flex",
                    gap: "1rem",
                    backgroundColor: "#654fef",
                  }}
                >
                  ویرایش
                </Button>
              </tr>
            </td>
            <td>
              <tr>null null</tr>
              <tr>09120148604</tr>
              <tr> 09120148604</tr>
              <tr>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography>Off</Typography>
                  <Switch {...label} defaultChecked />
                  <Typography>On</Typography>
                </Stack>
              </tr>
              <tr>
                <Button
                  variant="text"
                  startIcon={<AiOutlinePlus />}
                  style={{
                    padding: "10px",
                    fontFamily: "v",
                    fontSize: "16px",
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  انتصاب نقش
                </Button>
                <Button
                  variant="contained"
                  startIcon={<GrEdit />}
                  style={{
                    padding: "5px 15px",
                    fontFamily: "v",
                    fontSize: "16px",
                    display: "flex",
                    gap: "1rem",
                    backgroundColor: "#654fef",
                  }}
                >
                  ویرایش
                </Button>
              </tr>
            </td>
            <td>
              <tr>null null</tr>
              <tr>09120148604</tr>
              <tr> 09120148604</tr>
              <tr>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography>Off</Typography>
                  <Switch {...label} defaultChecked />
                  <Typography>On</Typography>
                </Stack>
              </tr>
              <tr>
                <Button
                  variant="text"
                  startIcon={<AiOutlinePlus />}
                  style={{
                    padding: "10px",
                    fontFamily: "v",
                    fontSize: "16px",
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  انتصاب نقش
                </Button>
                <Button
                  variant="contained"
                  startIcon={<GrEdit />}
                  style={{
                    padding: "5px 15px",
                    fontFamily: "v",
                    fontSize: "16px",
                    display: "flex",
                    gap: "1rem",
                    backgroundColor: "#654fef",
                  }}
                >
                  ویرایش
                </Button>
              </tr>
            </td>
            <td>
              <tr>null null</tr>
              <tr>09120148604</tr>
              <tr> 09120148604</tr>
              <tr>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography>Off</Typography>
                  <Switch {...label} defaultChecked />
                  <Typography>On</Typography>
                </Stack>
              </tr>
              <tr>
                <Button
                  variant="text"
                  startIcon={<AiOutlinePlus />}
                  style={{
                    padding: "10px",
                    fontFamily: "v",
                    fontSize: "16px",
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  انتصاب نقش
                </Button>
                <Button
                  variant="contained"
                  startIcon={<GrEdit />}
                  style={{
                    padding: "5px 15px",
                    fontFamily: "v",
                    fontSize: "16px",
                    display: "flex",
                    gap: "1rem",
                    backgroundColor: "#654fef",
                  }}
                >
                  ویرایش
                </Button>
              </tr>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
