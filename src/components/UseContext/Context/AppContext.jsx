//create the context
//provide the context
//consume context

import React, { createContext } from "react"

export const AppContext = createContext()

const ContextProvider = (props) => {
    const phone = "9284848434"
    const name = "Patty"
    const email = "patty@gmail.com"

    return(
        <AppContext.Provider value={{phone, name, email}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider