import React, { useContext } from "react"
import { AppContext } from "./Context/AppContext"

function Contact() {
    const {name, phone} = useContext(AppContext)

    return(
        <>
          <h2>Contact</h2>
          <h3>Hello, {name}</h3>
          <p>{phone}</p>
        </>
    )
}

export default Contact