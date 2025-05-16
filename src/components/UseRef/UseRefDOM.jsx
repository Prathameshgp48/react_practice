import React, { useEffect, useRef, useState } from "react"

function UseRefDOM() {
    const inputElement = useRef()
    const [name, setName] = useState("")

    useEffect(() => {
       inputElement.current.focus()
    }, [])

    const btnClick = (e) => {
        e.preventDefault()
        console.log(inputElement.current.value)
        setName(inputElement.current.value)
        inputElement.current.value = ""
    }

    return (
        <>
        {name? (
            <h1>{name}</h1>
        ): (
            <h2>Enter Name</h2>
        )}
        <input type="text" ref={inputElement}/>
        <button onClick={btnClick}>Submit</button>
        </>
    )
}

export default UseRefDOM