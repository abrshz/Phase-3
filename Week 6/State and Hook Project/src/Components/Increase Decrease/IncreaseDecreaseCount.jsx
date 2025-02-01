import React, { useContext, useState } from 'react'
import { MyContext } from '../Context Api/MyProvider'

function IncreaseDecreaseCount() {
    
    const {count , setCount} = useContext(MyContext)

    function increase()  {
        setCount((count) => count + 1)
    }

    function decrease()  {
        setCount((count) => count - 1)
    }

    function reset()  {
        setCount(0)
    }
    
  return (
    <div>
        <h1>Initial click {count}</h1>
        <br />
        <hr />
        <br />
        <div className='button-container'>
        <button onClick={reset}>
            Reset count
        </button> 
        <button onClick={increase}>
            Increase count
        </button>
        <button onClick={decrease}>
            Decrease count
        </button>
        </div>        
    </div>
  )
}

export default IncreaseDecreaseCount