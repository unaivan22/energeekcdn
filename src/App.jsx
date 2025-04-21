import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DialogDemo } from './Dialogdemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DialogDemo />
    </>
  )
}

export default App
