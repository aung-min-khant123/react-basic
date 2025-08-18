import React from "react";
import { btnStyles } from "./utils/style";

function Buttom({ isMobile }) {
  const handleClick = () => {
    alert("Hello React");
  };
  const btnText = isMobile ? "Mobile Button" : "Desktop Button";
  return (
    <>
      {/* <button onCLick={handleClick()}>Click</button> */}
      {/* <button onClick={handleClick}>CLick </button> */}
      <button onClick={() => handleClick()} style={btnStyles(isMobile)}>
        {btnText}
      </button>
    </>
  );
}

export default Buttom;
