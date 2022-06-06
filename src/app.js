import React , {useState , useReducer } from "react"
import Header from "./components/Header/index.js"
import SideBar from "./components/SideBar/index.js"
import MainArea from "./components/MainArea/index.js"
import Footer from "./components/Footer/index.js"
import ourContext from "./components/ourContext/index.js"
import DispatchContext from "./components/ourContext/DispatchContext/index.js"

function reducerFunction(state , action){
  switch(action.type){
    case "likeIncrement":
      return {...state, likeCounter: state.likeCounter + 1}
    case "changeSize":
      return{...state , size: action.value}
    case "changeColor":
      return{...state , color: action.value}
    case "changeColorAndSize":
      return{...state, color: action.value.color , size: action.value.size}
  }
}

const initialState = {
  size: 16,
  color: "black",
  likeCounter: 0
}


function App() {
  const [state , dispatch] = useReducer(reducerFunction , initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
    <ourContext.Provider value={state}>
    <div className="grid-parent">
      <Header/>
      <SideBar/>
      <MainArea/>
      <Footer/>
    </div>
    </ourContext.Provider>
    </DispatchContext.Provider>
  )
}
export default App;