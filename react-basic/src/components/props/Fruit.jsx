import React from "react";
import { customStyles } from "../../utils/style";

function Fruit({ name, price, children }) {
  
  return (
    <>
      <h3 style={customStyles}>{name}</h3>
      <p style={{color: "red"}} className="para-style">{price}</p>
      {children}
      <hr />
    </>
  );
}

export default Fruit;
