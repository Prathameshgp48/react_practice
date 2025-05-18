import React, { useContext } from "react"
import { AppContext } from "./Context/AppContext"

function Footer() {
    const {email} = useContext(AppContext)

    return(
        <>
          <h1>Footer</h1>
          <p>{email}</p>
        </>
    )
}

export default Footer