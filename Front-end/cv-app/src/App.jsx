import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResumeEntry from './ResumeEntry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResumeEntry />
    </>
  )
}

export default App
