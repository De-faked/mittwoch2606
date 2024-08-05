import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Text from './Text'

function App() {
  const [showText, setShowText] = useState(true);
  const [text, seText] = useState("");

  return (
    <>
      <div>
        <h1>Hallo Selfrino</h1>
        <button
          onClick={() => {
            setShowText(!showText);
          }}
          className='button'
        >
          show my writing!!!
        </button>
        {showText && <Text/>}

        <input 
        // onChange={(event) => console.log.apply(event.target)}
        onChange={(event) => {
          seText(event.target.value);
          
        }}
        className='input'
        />
                <input 
        // onChange={(event) => console.log.apply(event.target)}
        onChange={(event) => {
          seText(event.target.value);
          
        }}
        className='input'
        />
        <h3>{text} </h3>
        <h3>{text} </h3>

      </div>
    </>
  );
}

export default App
