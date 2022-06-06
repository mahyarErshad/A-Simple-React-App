import React , {useState } from "react"
import Header from "./components/Header/index.js"
import SideBar from "./components/SideBar/index.js"
import MainArea from "./components/MainArea/index.js"
import Footer from "./components/Footer/index.js"
import ourContext from "./components/ourContext/index.js"


function App() {
  const [size , setSize] = useState(16)
  const [color , setColor] = useState("black")
  const [likeCounter , setLikeCounter] = useState(0)

  function handleSize(e) {
    setSize(e.target.value)
    }
  function handleColor(e) {
    setColor(e.target.value)
    }
    function handleButton(){
      setColor("black");
      setSize(16);
    }
  return (
    <ourContext.Provider value={{size, setSize, color, setColor, likeCounter, setLikeCounter, handleSize, handleColor, handleButton}}>
    <div className="grid-parent">
      <Header/>
      <SideBar/>
      <MainArea/>
      <Footer/>
    </div>
    </ourContext.Provider>
  )
}
export default App;