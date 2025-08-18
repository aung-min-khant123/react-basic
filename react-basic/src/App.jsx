import Buttom from "./Buttom"
import ApiData from "./components/ApiData"
import CRUD from "./components/CRUD"
import SimpleUseEffect from "./components/Hooks/UseEffect/SimpleUseEffect"
import Clock from "./components/Hooks/UseState/Clock"
import Dynamic from "./components/Hooks/UseState/Dynamic"
import FormWithUseState from "./components/Hooks/UseState/FormWithUseState"
import InputWithUseState from "./components/Hooks/UseState/InputWithUseState"
import SelectImage from "./components/Hooks/UseState/SelectImage"
import SelectImg2 from "./components/Hooks/UseState/SelectImg2"
import SimpleUseState from "./components/Hooks/UseState/SimpleUseState"
import Shop from "./components/props/Shop"
import WelcomeClass from "./components/WelcomeClass"
import WelcomeFunc from "./components/WelcomeFunc"
import Logo from "./Logo"
import { customStyles } from "./utils/style"


function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>Hello</h1>
    <WelcomeFunc/>
    <WelcomeClass/> */}
    {/* <Shop></Shop>
    <h5 style={customStyles}>Buttom</h5> */}
    {/* <Logo></Logo> */}
    {/* <Buttom isMobile ={true}></Buttom>
    <Buttom></Buttom> */}
    {/* <FormWithUseState>
    </FormWithUseState> */}
      {/* <Title title={"Hello"}></Title> */}
      {/* <InputWithUseState/>
      <SimpleUseState/> */}
      {/* <Dynamic/> */}
      {/* <CRUD></CRUD> */}
       {/* <SelectImage></SelectImage>  */}
        {/* <SelectImg2></SelectImg2> 
       <SimpleUseEffect></SimpleUseEffect> */}
       {/* <Clock></Clock> */}
       <ApiData></ApiData>
      {/* <ComponentA/> */}
    </>
  )
}

export default App
