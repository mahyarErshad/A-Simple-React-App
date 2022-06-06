import React , {useState} from "react"
import Header from "./components/Header/index.jsx"
import SideBar from "./components/SideBar/index.jsx"
import MainArea from "./components/MainArea/index.jsx"
import Footer from "./components/Footer/index.jsx"

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
    <div className="grid-parent">
      <Header/>
      <SideBar/>
      <MainArea/>
      <Footer/>
    </div>
  )
}