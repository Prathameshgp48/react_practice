//UseEffect hook allow you to perform side effect in your component
// examples: fetching data from API
// directly updating DOM
// setTimeout and setInterval

import React, { useEffect, useState } from "react"

function UseEffect () {
    const [count, setCount] = useState(0)
    //useEffect(callback, dependency array(optional))


    //without dependency array
    // useEffect(()=>{
    //   setTimeout(()=>{
    //     setCount(count => count+1)
    //   }, 2000)
    // })
    //useEffect runs after every render when there is no dependency array (here react has no idea what to depend on)

    //with empty dependency array
    useEffect(()=>{
      setTimeout(()=>{
        setCount(count => count+1)
      }, 2000)
    }, [])
    //empty arr specify that you depend on nothing, so it only run function once on the time of first render


    //with dep array including state variable
    // useEffect(()=>{
    //   setTimeout(()=>{
    //     setCount(count => count+1)
    //   }, 2000)
    // }, [count])
    //change in dep arr variable trigger re-render which runs

   //     “Hey React, please run this task for me…”

  // If you say nothing about when → React assumes every time something happens, it should check.

  // If you say: “Only if name changes” → React checks just that.

  // If you say: “Don’t worry, I don’t need it to change at all” ([]) → React runs it once, and forgets it.

    return (
         <>
           <h1>I rendered {count} time(s).</h1>
         </>
    )
}

export default UseEffect