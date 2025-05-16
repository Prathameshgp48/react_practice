//useMemo hook returns memoized value.
//it works like caching a value so that it does'nt need 
//to be recalculated
//it only runs when one of its dependencies gets updates
// improve performance of the application.
//useMemo and useCallback is same at some extent, differnce is:
// -> useMemo returns memoized value
// -> useMemo returns memoized function

import { useEffect, useMemo, useRef, useState } from "react"


function UseMemo() {
    const [number, setNumber] = useState(0)
    const [counter, setCounter] = useState(0)
    const inputEle = useRef()

    useEffect(()=>{
        inputEle.current.focus()
    }, [])

    const calculate = (num) => {
        console.log("Calculations Done")  //3. leads to run this code whenever counter changes and input is not entered
        return Math.pow(num, 3)
    }

    // const result = calculate(number)  //2. each rerender execute the function even if we didnt enter any input
    //4. to avoid this we will be using useMemo => useMemo(callback, dependency)
    const result = useMemo(() => calculate(number), [number])
    //dependency arr just specify that only call the function when number variable changes

    return (
        <>
          <input type="number" ref={inputEle} value={number} onChange={e=>setNumber(e.target.value)}/>
          <h1>Cube of the number: {result}</h1>
          <button onClick={()=>setCounter(prev => prev+1)}>Counter++</button> {/* 1. whenever we increment counter, it triggers re-render */}
          <h1>Counter: {counter}</h1>
        </>
    )
}

export default UseMemo