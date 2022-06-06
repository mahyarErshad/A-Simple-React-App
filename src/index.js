import React , {useState} from "react"
import { createRoot } from "react-dom/client"

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
      <div className="header">
        <h1>Welcome To Our App!!!</h1>
        <p>The current size is {size} and the current color is {color}.</p>
        <p>
          This page has been liked <strong>{likeCounter}</strong> times.
        </p>
      </div>
      <div className="sidebar">
        <input type="text" value={size} onChange={handleSize}/>
        <input type="text" value={color} onChange={handleColor}/>
        <button onClick={handleButton}>Make the text default</button>
      </div>
      <div className="main-area" style={{color , fontSize:`${size}px`}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quod obcaecati dolore debitis amet aut, excepturi voluptas ratione quibusdam laboriosam, optio pariatur provident doloremque consequatur animi? Consequuntur, officiis. Explicabo, vel.</p>
      </div>
      <footer className="footer">
        <p>
          This is the footer. <button onClick={()=> setSize(30)}>Make the text 30px but leave the color the same</button>
        </p>
        <p>
          <button onClick={()=>setLikeCounter(likeCounter + 1)}>Like The Page</button>
        </p>
      </footer>
    </div>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)
