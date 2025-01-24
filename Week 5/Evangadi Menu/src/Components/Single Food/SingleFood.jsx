import React, { Component } from 'react'
import module from "./SingleFood.module.css"

export default class SingleFood extends Component {
    render() {
        const {imgFood, titleFood, priceFood , descFood} = this.props;
        return (
            <>
            <div className={module["single-food"]}>
            <div className={module.img}>
              <img
                src={imgFood}
              />
            </div>
            <div className={module["title-price"]}>
              <h3>{titleFood}</h3>
              <p>${priceFood}</p>
            </div>
            <div className={module["food-desc"]}>
              {descFood}
            </div>
          </div>
          </>
        )
      }
}
