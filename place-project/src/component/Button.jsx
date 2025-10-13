import React from "react";

function Button({ btnText, startIcon, endIcon, clickEvent }) {
  return (
    <button onClick={clickEvent} className="border-0 bg-red-800 text-white text-sm rounded-sm pb-0.5 pt-1 px-3">
      {startIcon}
      {btnText}
      {endIcon}
    </button>
  );
}

export default Button;
