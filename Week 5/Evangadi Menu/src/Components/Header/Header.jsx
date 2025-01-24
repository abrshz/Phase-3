import  { Component } from 'react'
import module from "./Header.module.css"

export default class Header extends Component {
  render() {
    return (
        <header className={module.title} >
        <h1>Evangadi Menu</h1>
        <div></div>
      </header>
    )
  }
}
