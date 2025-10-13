
import PlaceList from './pages/PlaceList'
import PlaceDetail from './pages/PlaceDetail'
import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<PlaceList />}></Route>
        <Route path="/:id" element={<PlaceDetail />}></Route>
      </Routes>
    </>
  )
}

export default App
