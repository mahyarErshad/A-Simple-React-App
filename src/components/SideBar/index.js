import React , {useContext} from 'react'
import ourContext from "../ourContext/index.js"
import DispatchContext from "../ourContext/DispatchContext/index.js"


function SideBar() {
  const state = useContext(ourContext)
  const dispatch = useContext(DispatchContext)

  return (
    <div className="sidebar">
    <input type="text" value={state.size} onChange={(e) => dispatch({type : "changeSize", value: e.target.value})}/>
    <input type="text" value={state.color} onChange={(e)=> dispatch({type: "changeColor" , value: e.target.value})}/>
    <button onClick={()=> dispatch({
      type: "changeColorAndSize",
      value: {color: "black", size: 16}
    })}>Make the text default</button>
  </div>
  )
}

export default SideBar