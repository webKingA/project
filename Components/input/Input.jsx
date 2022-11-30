import React from "react";

const Input = (props) => {
  return (
      <input
        style={{outline : "none" , padding : "5px" , fontFamily : "k" , fontSize : "16px" , border : "1px solid rgba(0,0,0,.1)"}}
        type={props.type}
        placeholder={props.placeholder}
        className={props.classname}
      />
  );
};

export default Input;
