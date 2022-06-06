import React , {useContext} from 'react'
import ourContext from "../ourContext/index.js"
import DispatchContext from "../ourContext/DispatchContext/index.js"

function Footer() {
  const state = useContext(ourContext)
  const dispatch = useContext(DispatchContext)

  return (
    <footer className="footer">
    <p>
      This is the footer. <button onClick={()=> dispatch({type: "changeSize", value: 30})}>Make the text 30px but leave the color the same</button>
    </p>
    <p>
      <button onClick={()=> dispatch({type : "likeIncrement"})}>Like The Page</button>
    </p>
  </footer>
  )
}

export default Footer