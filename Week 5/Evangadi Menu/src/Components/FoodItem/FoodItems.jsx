import  { Component} from 'react'
import menu from "../../assets/Data/data"
import module from "./FoodItems.module.css"
import SingleFood from '../Single Food/SingleFood';


export default class FoodItems extends Component {
  render() {
    return (
       <div className={module["foods-container"]}>
  {menu?.map((order)=>{
    const {id, img, price, title, desc} = order;
    return (
      <SingleFood 
      key={id}
      imgFood={img}
      titleFood={title}
      priceFood={price}
      descFood={desc} 
      />
    )
  })}          
</div>
    )
  }
 
}
