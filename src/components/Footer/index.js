import React , {useContext} from 'react'
import ourContext from "../ourContext/index.js"

function Footer() {
  const state = useContext(ourContext)

  return (
    <footer className="footer">
    <p>
      This is the footer. <button onClick={()=> state.setSize(30)}>Make the text 30px but leave the color the same</button>
    </p>
    <p>
      <button onClick={()=>state.setLikeCounter(state.likeCounter + 1)}>Like The Page</button>
    </p>
  </footer>
  )
}

export default Footer