import React , {useContext} from 'react'
import ourContext from "../ourContext/index.js"


function SideBar() {
  const state = useContext(ourContext)

  return (
    <div className="sidebar">
    <input type="text" value={state.size} onChange={state.handleSize}/>
    <input type="text" value={state.color} onChange={state.handleColor}/>
    <button onClick={state.handleButton}>Make the text default</button>
  </div>
  )
}

export default SideBar