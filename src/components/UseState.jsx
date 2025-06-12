import React, {useState} from "react";

function UseState() {
    const [profile, setProfile] = useState({
        name: "Prathamesh", 
        yog: "2025",
        role: "Web Developer",
        age: 21
    })

    const [exp, setExp] = useState(1)

    // for updating some records of the state, use arrow function with variable which will persist all previous records
    const changeRole = () => {
        setProfile((prev) => { 
            return {...prev, role: "Backend developer"}
        })
    }

    const updateAge = () => {
        setProfile((prev)=> {
            return {...prev, age: prev.age+1}
        })
    }

    const updateExp = () => {
        setExp(exp+1) // fetch initial value of exp i.e 1
        setExp(exp+1) // fetch initial value of exp i.e 1
        setExp(exp+1) //...
        setExp(exp+1) //...

        //to increase exp value by 4
    //     console.log(exp)
    //     setExp(exp =>{ 
    //         console.log(exp)
    //         return exp + 1}) 
    //     setExp(exp =>{ 
    //         console.log(exp)
    //         return exp + 1})
    //    setExp(exp =>{ 
    //         console.log(exp)
    //         return exp + 1})
    //     setExp(exp =>{ 
    //         console.log(exp)
    //         return exp + 1})
    }

    return (
        <div>
          <h1>I'm {profile.name}</h1>
          <p>{profile.age} years old {profile.role} passing out from {profile.yog} Batch</p>
          <h2>{exp} year(s) of experience.</h2>
          <button style={{'backgroundColor': 'blue'}} onClick={changeRole}>New Role</button>
          <button style={{'backgroundColor': 'orange'}} onClick={updateAge}>Update</button>
          <button style={{'backgroundColor': 'lime'}} onClick={updateExp}>Update Exp</button>
        </div>
    )
}

export default UseState;