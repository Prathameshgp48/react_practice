// useRef allow us to create mutable variables which will not render the component
// also used for accessing DOM elements
// it will not re render if any variable changes unlike useEffect

import React, { useEffect, useRef, useState } from "react";

function UseRefRender() {
    const [value, setValue] = useState(0)
    const count = useRef(0)
    console.log(count.current)

    useEffect(() => {
        count.current += 1
    })

    return (
        <>
        <button onClick={() => setValue(prev=>prev-1)}>decrement</button>
        <h1>{value}</h1>   {/*here increment or decrement of value cause rerender leading to run useEffect */}
        <button onClick={() => setValue(prev=>prev+1)}>increment</button>
        <h2>Render Count: {count.current}</h2>
        </>
    )
}

export default UseRefRender