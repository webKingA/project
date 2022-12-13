export const  customStyles = {
  // @ts-ignore
  control: (base, state) => ({
    ...base,
    background: "#fff",
    color: "#fff",
    fontFamily: "v",
    fontSize: ".90rem",
    width: "11rem",
    height: "2.8rem",
    border: 0,
    // This line disable the blue border
    boxShadow: "none",
    cursor: "pointer",
    textAlign:"center"
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
    fontFamily: "sans",
    fontSize: "0.77rem",
    fontWeight: "bold",
  }),
  // @ts-ignore
  menuList: (base) => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
    fontFamily: "v",
    color: "#00000092",
    "::-webkit-scrollbar": {
      width: "4px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),
  // @ts-ignore
  placeholder: (base) => ({
    ...base,
    fontSize: "0.80rem",
    color: "#000",
    fontWeight: 400,
    textAlign: "center",
  }),
};