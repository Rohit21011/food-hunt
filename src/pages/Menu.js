import CategoryHeader from "../components/layout/CategoryHeader";
import Icon from "../components/shared-components/Icons";
import MenuCard from "../components/shared-components/MenuCard";

const Menu = () => {
  return <>
  <CategoryHeader title="Menu" subTitle="Menu"/>
  <div className="container-fluid " id="lunch" style={{ position: "relative" }}>
  <h2 className=" tab-titles-lg">
    Lunch
    <Icon className="far fa-arrow-alt-circle-right" />

  </h2>
  <div className="row justify-content-around " id="show-lunch">
    <MenuCard imgSrc="omlet.jpg" price="100" name="omlet"/>
    <MenuCard imgSrc="omlet.jpg" price="300" name="omlet"/>
    <MenuCard imgSrc="omlet.jpg" price="400" name="omlet"/>
    <MenuCard imgSrc="omlet.jpg" price="100" name="omlet"/>
    <MenuCard imgSrc="omlet.jpg" price="100" name="omlet"/>
    
  </div>
</div>

  </>;
};

export default Menu;
