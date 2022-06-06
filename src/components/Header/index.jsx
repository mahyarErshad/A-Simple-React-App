import React from 'react'

function Header() {
  return (
    <div className="header">
    <h1>Welcome To Our App!!!</h1>
    <p>The current size is {size} and the current color is {color}.</p>
    <p>
      This page has been liked <strong>{likeCounter}</strong> times.
    </p>
  </div>
  )
}

export default Header