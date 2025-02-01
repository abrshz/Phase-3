import React, { Component } from 'react'
import CounterDisplay from '../Counter display/CounterDisplay';
import EvenCounter from '../Even counter/EvenCounter';

export default class MyCounter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            even: 0
            };
    }

    allClicksCounter =  () => {
        this.setState((prevState) => ({ 
            counter: prevState.counter + 1,
            even: prevState.counter + 1 % 2 === 0 ? prevState.counter + 1 : prevState.even
         }

         
        
        ));
    }

    evenClicksCounter = () => {
        this.setState((prevState) => {
            if ((prevState.counter) % 2 === 0) {
              return {even: prevState.counter};
            }
        }
      )
    }

    
  render() {
    return (
        <>
        <button onClick= {() => {this.allClicksCounter(); this.evenClicksCounter()} } >Click here</button>
        <CounterDisplay count={this.state.counter} />
        <EvenCounter even={this.state.even}  />
        </>
    )
  }
}
