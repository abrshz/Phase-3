import React from 'react'
import MyCounter from './Components/My counter/MyCounter'
import "./App.css"
import IncreaseDecreaseCount from './Components/Increase Decrease/IncreaseDecreaseCount'
import UseEffectForTitle from './Components/UseEffect/UseEffectForTitle'
import MyProvider from './Components/Context Api/MyProvider'

function App() {
  return (
    <MyProvider> 
    <div>
      {/* <MyCounter /> */}
      <IncreaseDecreaseCount />
      <br />
      <br />
      <UseEffectForTitle />
    </div>
    </MyProvider>
  )
}

export default App