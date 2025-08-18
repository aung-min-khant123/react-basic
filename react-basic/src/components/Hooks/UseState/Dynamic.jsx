import React, {useState} from 'react'

function Dynamic() {
    const[color, setColor] = useState("");
  return (
    <>
    <div style = {{
        width:200,
        height:200,
        outline: `10px double ${color}`,
        margin: "3rem",
        backgroundColor: color,
    }}>

    </div>
    <input type="text" onChange={(e) => setColor(e.target.value)}/>
    </>
  );
}

export default Dynamic