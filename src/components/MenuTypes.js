import React from "react";
import Image from "./shared-components/Image";
const data=[
  {
    imgSrc:require('../assets/images/small-burger.png'),
    title:"COMBO",
  },
  {
    imgSrc:require('../assets/images/kids-menus.png'),
    title:"KIDS MENUS",
  },
  {
    imgSrc:require('../assets/images/pizzas.png'),
    title:"PIZZA",
  },
  {
    imgSrc:require('../assets/images/box-meal.png'),
    title:"BOX MEALS",
  },
  {
    imgSrc:require('../assets/images/sauses.png'),
    title:"SAUSES",
  },
  {
    imgSrc:require('../assets/images/hot-drinks.png'),
    title:"DRINKS",
  }
]
const MenuTypes = () => {
    return(
        <div className="container mt-5">
        <div className="row justify-content-around  ">
          {data.map(({imgSrc,title})=>{
            return(
            <div className=" col-lg-2 col-md-4   col-6 mt-4">
             <div className="text-center">
               <a href="#">
                <Image width="108" height="95px" src={imgSrc} alt={title}/>
               </a>
               <h5 className="product-title " href="#">
                 {title}
               </h5>
             </div>
           </div>
          )})}
        </div>
      </div>
      

    )
}

export default MenuTypes;