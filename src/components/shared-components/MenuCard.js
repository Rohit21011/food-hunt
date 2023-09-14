import Icon from "./Icons";
import Image from "./Image";

const MenuCard = ({imgSrc,price,name}) => {
  return (
    <div className="ml-1 mt-5 col-lg-2 col-md-3 col-sm-5 col-9  menu-card">
      <a href="#">
        <Image className="mt-5 set-height" src={require(`../../assets/foodImages/${imgSrc}`)}/>
       
      </a>
      <i className="far fa-heart wishlist" prod_id="${value.menu_id}" />
      <a href="">
        <Icon className="fas fa-shopping-basket  menu-cart"/>
        
      </a>
      <div>
        <p>
          ₹ {price}/-
        </p>
      </div>
      <p style={{ marginTop: "-10px" }}>
        {name}
      </p>
    </div>
  );
};

export default MenuCard;
