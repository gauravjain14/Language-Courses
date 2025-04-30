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

  function CustomInput() {
    const [value, setValue] = useState("");
    const [error, setError] = useState(null); // State for validation error

    // Validation function
    const validateInput = (inputValue) => {
      if (!inputValue) {
        return "Input cannot be empty."; // Or handle empty state differently
      }
      const errors = [];
      if (!/[A-Z]/.test(inputValue)) {
        errors.push("one uppercase letter");
      }
      if (!/[a-z]/.test(inputValue)) {
        errors.push("one lowercase letter");
      }
      if (!/[0-9]/.test(inputValue)) {
        errors.push("one number");
      }
      // Using a common set of special characters
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(inputValue)) { 
        errors.push("one special symbol");
      }

      if (errors.length > 0) {
        return `Input must contain at least ${errors.join(', ')}.`;
      }
      
      return null; // No error
    };

    const handleChange = (event) => {
      const newValue = event.target.value;
      setValue(newValue); // Update the value state

      // value is not immediately changed
      console.log('Can I access value inside ', value);
      
      const validationError = validateInput(newValue); 
      setError(validationError); // Update the error state
      
      console.log("Current input:", newValue); // Log the actual current input
      if (validationError) {
        console.log("Validation Error:", validationError);
      } else {
        console.log("Input is valid.");
      }
    };

    return (
      <div> {/* Wrap input and error message */}
        <input
          type="text"
          value={value}
          onChange={handleChange}
          style={{ borderColor: error ? 'red' : 'initial' }} 
        />
        {error && <p style={{ color: 'red', fontSize: '0.8em' }}>{error}</p>}
      </div>
    );
  }

  function Component() {
    const [count, setCount] = useState(0);
  
    if (count === 0) {
      setCount(count + 1);
    }
  
    return <h1>{count}</h1>;
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
        <CustomInput />
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
