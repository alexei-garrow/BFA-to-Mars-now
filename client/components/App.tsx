import { useState } from 'react'
import GenerateQuote from './GenerateQuote.tsx'
import { useRef } from 'react'



const App = () => {
  const [count, setCount] = useState(0)
  const noButton = useRef(null);
  const [position, setPosition] = useState(null);


  function moveButton() {
    if (!noButton.current) {
      return;
    }
    const x = Math.random() * (window.innerWidth - noButton.current.offsetWidth);
    const y =
      Math.random() * (window.innerHeight - noButton.current.offsetHeight);
    setPosition({ x, y });
  }


  return (
    <>
      <div className="App"></div>
      <h1>Amazing financial advice</h1>
      <div>
        <button
          id="noButton"
          style={
            position == null
              ? {}
              : {
                position: "absolute",
                left: `${position.x}px`,
                top: `${position.y}px`,
              }
          }
          ref={noButton}
          onMouseOver={moveButton}
          onClick={moveButton}
        >
          Gerard's Bank Account Details
        </button>
      </div>
      <div>
        <GenerateQuote />
      </div>
    </>
  )

}

export default App

