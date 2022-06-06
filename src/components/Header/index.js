import React , {useContext} from 'react'
import ourContext from "../ourContext/index.js"

function Header() {
  const state = useContext(ourContext)

  return (
    <div className="header">
    <h1>Welcome To Our App</h1>
    <p>The current size is {state.size} and the current color is {state.color}.</p>
    <p>
      This page has been liked <strong>{state.likeCounter}</strong> times.
    </p>
  </div>
  )
}

export default Header