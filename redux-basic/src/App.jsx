import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BooksList from './component/BooksList'
import SwitchTheme from './component/SwitchTheme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BooksList></BooksList>
      <SwitchTheme></SwitchTheme>
    </>
  )
}

export default App
