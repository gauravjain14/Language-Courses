import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './SomeProps';
import { sculptureList } from './data.js';

function App() {
  const [count, setCount] = useState(0)
  const [backgroundColor, setBackgroundColor] = useState('red');

  const handleButtonClick = () => {
    setBackgroundColor('blue');
    window.open('https://www.google.com', '_blank');
  }

  
  function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    
    function handleNextClick() {
      setIndex((index + 1) % sculptureList.length);
    }
  
    function handleMoreClick() {
      setShowMore(!showMore);
    }
  
    let sculpture = sculptureList[index];
    return (
      <>
        <button onClick={handleNextClick}>
          Next
        </button>
        <h2>
          <i>{sculpture.name} </i> 
          by {sculpture.artist}
        </h2>
        <h3>  
          ({index + 1} of {sculptureList.length})
        </h3>
        <button onClick={handleMoreClick}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
        <img 
          src={sculpture.url} 
          alt={sculpture.alt}
        />
      </>
    );
  }


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      <Button label="Click me" color="red" backgroundColor={backgroundColor} onClick={handleButtonClick}/>
      </div>
      <Gallery />
    </>
  )
}

export default App
