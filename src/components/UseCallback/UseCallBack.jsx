//useCallback let you chache a function definitino bw re-renders
//it means it doesn't create multiple instance of same function when re-render happens
//it provides cached function when re-render happens

import React, { useCallback, useState } from "react"
import Header from "./Header"

function UseCallBack() {
    const [count, setCount] = useState(0)
    
    // const fs = () => {} we pass this as prop it will create new function instance on every re-render
    
    //useCallback(cb, d)
    const fs = useCallback(() => {}, [])

    return (
        <>
          <Header fs={fs}/> {/* we will use React.memo(Header) while exporting the function*/}
          <h2>{count}</h2>
          <button onClick={() => setCount(prev => prev+1)}>Click</button>
        </>
    )
}

export default UseCallBack