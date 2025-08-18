import React from "react";

function Title({title}) {
    console.log(title)
    return <h2>{title || "Heading"}</h2>;
}
export default Title;