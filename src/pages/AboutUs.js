import CategoryHeader from "../components/layout/CategoryHeader";
import HowItWorks from "../components/shared-components/HowItWorks";
import Image from "../components/shared-components/Image";
import Favorite  from "../assets/images/choose-favorite.jpg";
import Arrow from "../assets/images/arrow.png";
import Arrow2 from "../assets/images/arrow2.png";
import Arrow3 from "../assets/images/arrow3.png";
import DeliverMeal from "../assets/images/diliver-meal.jpg";
import Cod from "../assets/images/cash-on-delivery.jpg";
import EatAndJoy from "../assets/images/eat-and-enjoy.jpg";
const AboutUs = () => {
    return (
<>
<CategoryHeader title="About Us" subTitle="About Us"/>
<div className="container-fluid" style={{ marginTop: "5%" }}>
  <div className="row ">
    <div className="col-md-4 ">
      <h1 className="about-discription">
        Best burgers,deserts and pizzas ideas &amp; traditions from the whole
        world
      </h1>
      <p>
        Our restaurant offers you perfect cooking, best served dishes with fresh
        ingredients and old recipes.
        <br />
        <br />
        We have only carefully sourced and seasonal ingredients in our disposal
        to make rustic dishes. Chefs have an experience of working in some of
        the finest kitchens in maharashtra,india
      </p>
    </div>
    
    <div className="col-md-6   d-md-block d-none img-flex">
      <div className="row">
        <div className="col-6" style={{ height: 900 }}>
            <Image width="100%" height="auto" src={require('../assets/images/best-deserts2.jpg')}/>
        </div>
        <div className="col-6" style={{ height: 900 }}>
          <div className="row">
            <div className="col">
            <Image width="100%" height="auto" src={require('../assets/images/best-pizza1.jpg')}/>
            </div>
          </div>
          <div className="row" style={{ position: "relative", top: "5%" }}>
            <div className="col">
            <Image width="100%" height="auto" src={require('../assets/images/best-burger2.jpg')}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container">
  <h1 className="text-center title ">how it works</h1>
  <div className="row justify-content-sm-around justify-content-center  mt-5">
    <HowItWorks image={Favorite} steps="01 step" title="choose your favorite" arrowImage={Arrow}/>
    <HowItWorks image={DeliverMeal} steps="02 step" title="We deliver your meal" arrowImage={Arrow2}/>
    <HowItWorks image={Cod} steps="03 step" title="Cash on delivery" arrowImage={Arrow3}/>
    <HowItWorks image={EatAndJoy} steps="04 step" title="Eat and enjoy" />
    
  </div>
</div>
<div className="container " style={{ position: "relative", top: "10%" }}>
  <div className="row mt-5 justify-content-center">
    <div className="col-lg-5 col-8">
      <Image width="100%" src={require('../assets/images/our-shef.png')}/>
    </div>
    <div className="col-lg-5 col-8">
      <h1 className="title">HEALTHY FOOD CAN BE DELICIOUS</h1>
      <p style={{ fontFamily: '"Poppins", sans-serif', marginTop: "10%" }}>
        Plate was established in 2013, as a reliable food service provider where
        anyone could order healthy food they like.
      </p>
      <ul className="mt-5" style={{ fontWeight: 700, marginTop: "10%" }}>
        <li className="mt-3">
          <span className="dashed-line" />
          Choose gluten-free meals from our menu
        </li>
        <li className="mt-3">
          <span className="dashed-line" />
          The freshest ingredients for every dish
        </li>
        <li className="mt-3">
          <span className="dashed-line" />
          The freshest ingredients for every dish
        </li>
      </ul>
    </div>
  </div>
  <h1 className="title text-center">Our talented shefs</h1>
  <div className="row justify-content-md-around justify-content-center ">
    <div className="col-lg-3 col-md-4 col-12">
      <Image width="300px" height="300px" src={require('../assets/images/shef1.jpg')} className="rounded-circle our-shef"/>
    </div>
    <div className="col-lg-3 col-md-4 col-12">
    <Image width="300px" height="300px" src={require('../assets/images/shef2.jpg')} className="rounded-circle our-shef"/>
    </div>
    <div className="col-lg-3 col-md-4 col-12">
    <Image width="300px" height="300px" src={require('../assets/images/shef3.jpg')} className="rounded-circle our-shef"/>
    </div>
  </div>
</div>


</>
    )

}

export default AboutUs;