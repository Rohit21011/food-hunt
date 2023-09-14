import React from "react";
// import ScrollImage1 from '../images/scrollImage1.jpg';
// import ScrollImage2 from '../images/scrollImage2.jpg';
import { Carousel } from "react-bootstrap";
import Image from "./shared-components/Image";
const Slider= () => {
  const slides = [
    {
    captionHeading:"Los Angeles",
    caption:"We had such a great time in LA!",
    image: require('../assets/images/scrollImage1.jpg'), 
  },
  {
    captionHeading:"New York",
    caption:"We love the Big Apple!",
    image: require('../assets/images/scrollImage2.jpg'),
  }

]
return (
  <Carousel fade={true}>
  {slides.map((slide,i)=>{
    return(
      <Carousel.Item key={i} interval={1500} >
        <Image  className="d-block w-100"   src={slide.image} alt="slides"/>     
    
      <Carousel.Caption>
        <h3>{slide.captionHeading}</h3>
        <p>{slide.caption}</p>
      </Carousel.Caption>
    </Carousel.Item>

    )
  })}
   
 
 
</Carousel>

  
);

}
export default Slider;
