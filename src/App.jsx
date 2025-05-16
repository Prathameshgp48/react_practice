import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './components/UseState.jsx'
import UseEffect from './components/UseEffect.jsx'
import UseRefRender from './components/UseRef/UseRefRender.jsx'
import UseRefDOM from './components/UseRef/UseRefDOM.jsx'
import UseMemo from './components/UseMemo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <UseState/> */}
        {/* <UseEffect/> */}
        {/* <UseRefRender/> */}
        {/* <UseRefDOM /> */}
        <UseMemo/>
      </div>
    </>
  )
}

export default App
