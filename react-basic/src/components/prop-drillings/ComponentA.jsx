import React, { createContext } from 'react'
import ComponentB from "./ComponentB"

export const TitleContext = createContext();
function ComponentA() {
  return (
    <div>
        <h2>Component A</h2>
        <TitleContext.Provider value={{title: "MT", color:"red"}}>
            <ComponentB />
        </TitleContext.Provider>
    </div>
  )
}

export default ComponentA;