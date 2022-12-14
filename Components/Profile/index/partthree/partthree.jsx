import { useState } from "react";
import Button from "@mui/material/Button";
import { GrEdit } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import style from "./partthree.module.css";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import fetchClient from "../../../../utils/fetchClient";

export default function partthree({user}) {
  const [
    showModalPersonalInformation,
    setShowModalPersonalInformation,
  ] = useState(false);

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [nesMobile, setNesMobile] = useState("");

  const submitFormInformation = async () => {
    const id = localStorage.getItem("user");
    const data = {
      id: Number(id),
      userName: "",
      firstName: userName,
      lastName: userLastName,
      email: "",
      dateOfBirth: `${year}-${month}-${date}`,
      isAdminEdit: null,
      phoneNumber: "",
    };

    try {
      const {data:updateInformation} = await fetchClient.post(
        "/UserProfile/updateuser",
        data
      );

      console.log(updateInformation)
    } catch (error) {
      console.log("errrrrrrrrrrrrrrrrrr")
    }
  };

  return (
    <div
      className={style.profile__wrapper__information__three}
    >
      <div>
        <span>
          <FaUserCircle />
          ?????????????? ????????
        </span>
        <span>
          <Button
            size="medium"
            style={{
              fontFamily: "k",
              padding: "10px",
              borderRadius: "10px",
              display: "flex",
              gap: "10px",
              fontSize: "18px",
            }}
            startIcon={<GrEdit />}
            onClick={() => {
              setShowModalPersonalInformation(
                !showModalPersonalInformation
              );
            }}
          >
            ???????????? ??????????????
          </Button>
        </span>
      </div>
      {showModalPersonalInformation === false ? (
        <>
          <div>
            <span>
              ?????? ?? ?????? ????????????????
              <small>{user?.firstName} {user?.lastName}</small>
            </span>
            <span>
              ???? ??????
              <small>____</small>
            </span>
          </div>
          <div>
            <span>
              ?????????? ???????? ??????????
              <small>____</small>
            </span>
            <span>
              ?????????? ????????
              <small>____</small>
            </span>
          </div>
        </>
      ) : (
        <section className={style.Section1}>
          <div>
            <span>
              <TextField
                id="outlined-basic"
                label="??????"
                variant="outlined"
                style={{ width: "100%" }}
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </span>
            <span>
              <TextField
                id="outlined-basic"
                label="?????? ????????????????"
                variant="outlined"
                style={{ width: "100%" }}
                value={userLastName}
                onChange={(e) => {
                  setUserLastName(e.target.value);
                }}
              />
            </span>
            <span>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                style={{
                  width: "100%",
                  fontFamily: "k",
                  fontSize: "14px",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    ??????
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={date}
                    label="Age"
                    onChange={handleChangeDate}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={21}>21</MenuItem>
                    <MenuItem value={22}>22</MenuItem>
                    <MenuItem value={23}>23</MenuItem>
                    <MenuItem value={24}>24</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={26}>26</MenuItem>
                    <MenuItem value={27}>27</MenuItem>
                    <MenuItem value={28}>28</MenuItem>
                    <MenuItem value={29}>29</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={31}>31</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    ??????
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={month}
                    label="Age"
                    onChange={handleChangeMonth}
                  >
                    <MenuItem value={1}>??????????????</MenuItem>
                    <MenuItem value={2}>????????????????</MenuItem>
                    <MenuItem value={3}>??????????</MenuItem>
                    <MenuItem value={4}>??????</MenuItem>
                    <MenuItem value={5}>??????????</MenuItem>
                    <MenuItem value={6}>????????????</MenuItem>
                    <MenuItem value={7}>??????</MenuItem>
                    <MenuItem value={8}>????????</MenuItem>
                    <MenuItem value={9}>??????</MenuItem>
                    <MenuItem value={10}>????</MenuItem>
                    <MenuItem value={11}>????????</MenuItem>
                    <MenuItem value={12}>??????????</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    ??????
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={year}
                    label="Age"
                    onChange={handleChangeYear}
                  >
                    <MenuItem value={1}>1401</MenuItem>
                    <MenuItem value={2}>1400</MenuItem>
                    <MenuItem value={3}>1399</MenuItem>
                    <MenuItem value={4}>1398</MenuItem>
                    <MenuItem value={5}>1397</MenuItem>
                    <MenuItem value={6}>1396</MenuItem>
                    <MenuItem value={7}>1395</MenuItem>
                    <MenuItem value={8}>1394</MenuItem>
                    <MenuItem value={9}>1393</MenuItem>
                    <MenuItem value={10}>1392</MenuItem>
                  </Select>
                </FormControl>
              </ButtonGroup>
            </span>
          </div>
          {/* <div>
            <span>
              <FormControl
                sx={{ m: 1, minWidth: 120 }}
                style={{ width: "100%" }}
              >
                <Select
                  value={gender}
                  onChange={handleChangeGender}
                  displayEmpty
                  inputProps={{
                    "aria-label": "Without label",
                  }}
                  style={{ width: "100%" }}
                >
                  <MenuItem
                    value=""
                    style={{ width: "100%" }}
                  >
                    <em>??????</em>
                  </MenuItem>
                  <MenuItem
                    value={10}
                    style={{ width: "100%" }}
                  >
                    ????
                  </MenuItem>
                </Select>
              </FormControl>
            </span>
            <span>
              <TextField
                id="outlined-basic"
                label="???? ??????"
                variant="outlined"
                style={{ width: "100%" }}
                value={nationalCode}
                onChange={(e) => {
                  setNationalCode(e.target.value);
                }}
              />
            </span>
            <span>
              <TextField
                id="outlined-basic"
                label="?????????? ???????? ??????????"
                variant="outlined"
                style={{ width: "100%" }}
                value={nesMobile}
                onChange={(e) => {
                  setNesMobile(e.target.value);
                }}
              />
            </span>
          </div> */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "end",
              width: "100%",
              backgroundColor: "rgba(52, 152, 219,.1)",
              padding: "1rem 0",
            }}
          >
            <Button
              variant="outlined"
              style={{
                width: "12rem",
                padding: "12px",
                fontFamily: "k",
                fontSize: "16px",
                borderRadius: "10px",
              }}
              onClick={() => {
                setShowModalPersonalInformation(false);
              }}
            >
              ????????????
            </Button>
            <Button
              onClick={() => submitFormInformation()}
              variant="contained"
              style={{
                width: "12rem",
                padding: "12px",
                fontFamily: "k",
                fontSize: "16px",
                borderRadius: "10px",
                marginLeft: "1rem",
              }}
            >
              ??????????
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
