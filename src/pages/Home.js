import AboutFood from "../components/AboutFood";
import ItemCard from "../components/shared-components/ItemCard";
import ItemImage from "../assets/foodImages/Supreme Pizza.png"
import Bergur from "../assets/foodImages/Checken Burger.png";
import Desert from "../assets/foodImages/iced coffee.png";
import Nonveg from "../assets/foodImages/kabab.jpg"
import Slider from "../components/Slider";
import Scooter from "../assets/images/scooter.png";
import Watch from "../assets/images/watch.png";
import Pizza from "../assets/images/pizza.png";
import Sideleaf from "../assets/images/side-leaf.png";
import Bigpizza from "../assets/images/big-pizza.png";
import Discount from "../assets/images/discount2.png";
import Bgimage from "../assets/images/background-image.jpg"
import MenuTypes from "../components/MenuTypes";
import Image from "../components/shared-components/Image";
import Icon from "../components/shared-components/Icons";
import ClientReview from "../components/shared-components/ClientReview";
import { Carousel } from "react-bootstrap";
const Home = () => {
    return (
        <>
        
        <Slider/>
        <MenuTypes/>
        <AboutFood/>
        <div style={{ padding: "100px 50px 50px 50px", textAlign: "center" }}>
  <h2>Special Dishes</h2>
</div>

        <div className="container-fluid">
  <div className="row">
    <div className="col">
      <ul className="nav nav-pills justify-content-center " id="mytab">
        <li className="nav-item ml-4 mt-2">
          <a
            className="nav-link active special-dish "
            data-toggle="pill"
            href="#pizza"
          >
            PIZZA
          </a>
        </li>
        <li className="nav-item ml-4 mt-2">
          <a
            className="nav-link special-dish "
            data-toggle="pill"
            href="#burger"
          >
            BURGER
          </a>
        </li>
        <li className="nav-item ml-4 mt-2">
          <a
            className="nav-link special-dish "
            data-toggle="pill"
            href="#deserts"
          >
            DESERTS
          </a>
        </li>
        <li className="nav-item ml-4 mt-2">
          <a
            className="nav-link  special-dish "
            data-toggle="pill"
            href="#non-veg"
          >
            NONVEG
          </a>
        </li>
      </ul>
      {/* pizza*/}
      
      <div className="tab-content ">
        <div className="tab-pane fade show " id="pizza">
          <div className="row justify-content-around " id="pizza-details">
            <ItemCard imageName={ItemImage} price="200" itemName="suprem pizza" description="delisios" rating="4/5"/>
          </div>
        </div>
        {/* Burger*/}
        <div className="tab-pane fade  show active" id="burger">
          <div className="row justify-content-around" id="burger-details">
          <ItemCard imageName={Bergur} price="220" itemName="bergur" description="tasty" rating="4.3/5"/>
          </div>
        </div>
        {/* DESRTS*/}
        <div className="tab-pane fade " id="deserts">
          <div
            className="row justify-content-around"
            id="deserts-details"
          >
            <ItemCard imageName={Desert} price="110" itemName="ice coffee" description="tasty" rating="4/5"/>
          </div>
        </div>
        {/* non-veg*/}
        <div className="tab-pane fade " id="non-veg">
          <div className="row justify-content-around" id="nonveg-details">
          <ItemCard imageName={Nonveg} price="550" itemName="kabab" description="tasty" rating="4.5/5"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className=" container-fluid">
  <div className="row justify-content-around">
    <div className="col-lg-3  col-sm-5  col-10  div-pad">
      <div className="row ">
        <div className="col features">
          <div>
            <Image width="90px" height="90px" src={Scooter}/>
          </div>
          <div>
            <h3 className="heading">Free shipping</h3>
            <span className="pizza-description ml-3 ">
              Sign up for updates and get free shipping
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-3  col-sm-5  col-10 div-pad">
      <div className="row ">
        <div className="col features">
          <div>
          <Image width="90px" height="90px" src={Watch}/>
           
          </div>
          <div>
            <h3 className="heading">30 Minutes Delivery</h3>
            <span className="pizza-description ml-3">
              Everything you order will be quickly delivered to your door.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className=" col-lg-3  col-sm-5  col-10 div-pad">
      <div className="row ">
        <div className="col features">
          <div>
          <Image width="90px" height="90px" src={Pizza}/>
          </div>
          <div>
            <h3 className="heading">Best Quality Guarantee</h3>
            <span className="pizza-description ml-3">
              Poco is an international chain of family restaurants.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<br /><br /><br /><br /><br />
  {/*container 1 starts*/}
  <div
    className="container-fluid"
    style={{ backgroundImage: `url(${Bgimage})` }}
  >
    <div className="row" style={{ height: 170 }}>
      <div className="col-4  ">
        <Image width="150px" height="220px" src={Sideleaf}/>
      
      </div>
      <div className="col-4 ">
      <Image className="discount" src={Discount}/>
        
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
      <Image className="big-pizza" src={Bigpizza}/>
       
      </div>
      <div className="col-lg-6 ">
        <div className="text-center">
          <h3 className="pizza-title"> super</h3>
          <h3 className="pizza-title">Delisious</h3>
        </div>
        <h1 className="pizza-title1">Pizza</h1>
        <h3 className="pizza-description-1">
          Feel Hunger! Order Your Favouriate Food.
        </h3>
      </div>
      <div className="col"></div>
    </div>
  </div>
  <div className="container-fluid client-review-background">
  <h1 className="review-heading">What Our Client Says!</h1>

  {/* <Carousel fade={true}>
  
      <Carousel.Item  interval={1500} >
      <ClientReview/>    
    </Carousel.Item>
    <Carousel.Item  interval={1500} >
      <ClientReview/>    
    </Carousel.Item>
    <Carousel.Item  interval={1500} >
      <ClientReview/>    
    </Carousel.Item>

</Carousel> */}
  <div id="demo1" className="carousel slide " data-ride="carousel">
    <div className="carousel-inner">
      <ClientReview/>
      <ClientReview/>
      <ClientReview/>
     
      <a className="carousel-control-prev" href="#demo1" data-slide="prev">
        <span
          className="carousel-control-prev-icon bg-warning"
          style={{ height: 30, width: 30 }}
        />
      </a>
      <a className="carousel-control-next" href="#demo1" data-slide="next">
        <span
          className="carousel-control-next-icon bg-warning"
          style={{ height: 30, width: 30 }}
        />
      </a>
    </div>
    <ul className="carousel-indicators ">
      <li
        data-target="#demo1"
        data-slide-to={0}
        className=" indicators "
      />
      <li data-target="#demo1" data-slide-to={1} className=" indicators " />
      <li data-target="#demo1" data-slide-to={2} className=" indicators " />
    </ul>
  </div>
</div>
<div className="container-fluid mt-5">
  <div className="row">
    <div className="col-md-3 col-sm-6 col-12 img-hover">
      <Image src={require('../assets/images/hover-image1.jpg')}/>

    </div>
    <div className="col-md-3 col-sm-6 col-12 img-hover">
    <Image src={require('../assets/images/hover-image2.jpg')}/>
   
    </div>
    <div className="col-md-3 col-sm-6 col-12 img-hover">
    <Image src={require('../assets/images/hover-image3.jpg')}/>
     
    </div>
    <div className="col-md-3 col-sm-6 col-12 img-hover">
    <Image src={require('../assets/images/hover-image4.jpg')}/>
      
    </div>
  </div>
</div>


        </>

    )
}

export default Home;