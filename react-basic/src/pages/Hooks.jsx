import React from 'react'
import { Link } from 'react-router-dom';

function Hooks() {
  return (
    <ul>
        <li>
            <Link to="/hooks/useState">UseState</Link>
        </li>
        <li>
            <Link to="/hooks/useEffect">UseEffect</Link>
        </li>
        <li>
            <Link to="/hooks/useRef">UseRef</Link>
        </li>
    </ul>
  )
}

export default Hooks;