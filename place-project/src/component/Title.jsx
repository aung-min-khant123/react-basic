import React from "react";

function Title({ title, customStyles }) {
  return (
    <h2 className={`font-bold text-3xl text-white mb-4 ${customStyles} bg-Orange`}>
      {title}
    </h2>
  );
}

export default Title;
