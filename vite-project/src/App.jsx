import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <nav><ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li></ul></nav>
     <h1>My 2 Apps</h1>
     </>
  )
}

export default App
