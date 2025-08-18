import React from "react";
import Fruit from "./Fruit";

function Shop() {
  return (
    <>
      <h1>Fruit Shop</h1>
      {/* <Fruit name="Apple" price="$4"></Fruit>
      <Fruit name="Mango" price="$5"></Fruit> */}
      <Fruit name="Apple" price="$50">
        <button>Click</button>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          fugiat consequatur doloremque accusantium blanditiis, magnam impedit
          accusamus incidunt a temporibus dignissimos quod error rem, suscipit
          libero? Inventore earum maxime laborum.
        </p>
      </Fruit>
      <Fruit children={<h5>Hello Fruit</h5>}></Fruit>
    </>
  );
}

export default Shop;
