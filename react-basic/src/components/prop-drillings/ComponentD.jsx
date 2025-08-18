import React, { useContext } from 'react'
import { TitleContext } from './ComponentA';

function ComponentD() {
    const {title, color} = useContext(Title);
  return (
    <div>
        <h2>Component D</h2>
        <p style={{color}}>{title}</p>
    </div>
  );
}

export default ComponentD;