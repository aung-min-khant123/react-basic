import React from "react";
import { logoStyles } from "./utils/style";
import viteLogo from "/vite.svg"

function Logo() {
  return (
    <>
      <img style={logoStyles} src="https://www.reliancegeneral.co.in/siteassets/rgiclassets/images/blogs-images/top-5-fastest-cars-in-the-world2.webp"></img>
      <img src={viteLogo}></img>
    </>
  );
}

export default Logo;
