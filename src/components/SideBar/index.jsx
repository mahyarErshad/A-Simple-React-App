import React from 'react'

function SideBar() {
  return (
    <div className="sidebar">
    <input type="text" value={size} onChange={handleSize}/>
    <input type="text" value={color} onChange={handleColor}/>
    <button onClick={handleButton}>Make the text default</button>
  </div>
  )
}

export default SideBar