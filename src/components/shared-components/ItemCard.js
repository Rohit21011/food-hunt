
import Icon from "./Icons";
import Image from "./Image";
const ItemCard = ({imageName,price,itemName,description,rating}) => {
    return (
        
  <div className=" col-11 col-sm-5  col-lg-2 column-background ">
    <div className="row div-background">
      <div className=" col-10   div-col" id="pizza-image">
        <a href="#">
          <Image width="260px" height="260px" src={imageName} alt="pizza"/>
         
        </a>
      </div>
      <div className=" col-2 wishlist">
        <Icon className="fa fa-heart"/>
        
      </div>
    </div>
    <div className="row">
      <div className="col ">
        <p className="price">
          {rating}
        </p>
        <h3 className="heading-h3" id="pizza-name">
          {itemName}
        </h3>
        <div className="short-description" id="pizza-description">
          {description}
        </div>
        <a href="">
        <Icon className="fas fa-shopping-basket add-to-cart"/>
          
        </a>
        <span className="price" style={{ float: "left" }} id="pizza-price">
          ₹{price}/-
        </span>
      </div>
    </div>
  </div>
  


    )
}

export default ItemCard;