import { Component } from 'react'
import Header from './Components/Header/Header'
import module from "./App.module.css"
import FoodItems from './Components/FoodItem/FoodItems'


export default class App extends Component {
  render() {
    return (
      <div className={module["all-container"]} >
        <Header />
        <FoodItems />
      </div>
    )
  }
}
