 import { useState } from 'react'
import { getGreeting } from '../apiClient.ts'
import { useQuery } from '@tanstack/react-query'
import GenerateQuote from './GenerateQuote.tsx'

//make this look sick!!!!!!!!!!!!!!!


const App = () => {
  const [count, setCount] = useState(0)

  const {
    data: greeting,
    isError,
    isPending,
  } = useQuery({ queryKey: ['greeting', count], queryFn: getGreeting })

  if (isPending) return <p>Loading...</p>

  return (
    <>
      {count}
      <h1 className="text-3xl font-bold underline">{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Click</button>
      <div>
      <GenerateQuote />
      </div>
    </>
  )
}

export default App


// stretch button //
//export function instead?


// import { useRef, useState } from "react";

// export default function App() {
//   const noButton = useRef(null);
//   const [position, setPosition] = useState(null);

//   function moveButton() {
//     if (!noButton.current) {
//       return;
//     }
//     var x = Math.random() * (window.innerWidth - noButton.current.offsetWidth);
//     var y =
//       Math.random() * (window.innerHeight - noButton.current.offsetHeight);
//     setPosition({ x, y });
//   }

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <div>
//         <button id="yesButton">Yes!</button>
//         <button
//           id="noButton"
//           style={
//             position == null
//               ? {}
//               : {
//                   position: "absolute",
//                   left: `${position.x}px`,
//                   top: `${position.y}px`,
//                 }
//           }
//           ref={noButton}
//           onMouseOver={moveButton}
//           onClick={moveButton}
//         >
//           No...
//         </button>
//       </div>
//     </div>
//   );
// }