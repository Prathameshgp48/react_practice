import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './components/UseState.jsx'
import UseEffect from './components/UseEffect.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <UseState/> */}
        <UseEffect/>
      </div>
    </>
  )
}

export default App
