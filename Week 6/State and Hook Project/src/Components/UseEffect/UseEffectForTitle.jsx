import React, { useContext, useEffect, } from 'react'
import {MyContext} from "../Context Api/MyProvider"

function UseEffectForTitle() {

    const {count,setCount} = useContext(MyContext)   

   
    useEffect(()=>{ 
        if (count === 0) {
            alert("Component is mounted");
        }        
        document.title = `Count: ${count}`;
    }, [count])
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Click here</button>
        <h1>Count displayer: {count} </h1>
    </div>
  )
}

export default UseEffectForTitle