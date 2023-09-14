import React from "react";
import Bergur from "../assets/images/bergur.png";
import Discount from "../assets/images/discount.png";
import Image from "./shared-components/Image";
import Button from "./shared-components/Button";

const AboutFood = () => {
  return (
    <>
      <div className="col offset-lg-4 mt-5">
        <Image width="186px" height="168px" src={Discount} />
        
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-6">
            <div className="col-lg-6 col-md-12 ">
            <Image className="burger-img" width="647px" height="527px" src={Bergur} alt="bergur"/>
              
            </div>
          </div>
          <div className=" col-lg-6 col-md-12">
            <h4 className="font-h4">About Our Food</h4>
            <h2 style={{ fontSize: 36}}>
              From Texas with American Love
            </h2>
            <div style={{ color: "gray", letterSpacing: 1 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="m-5 ">
            <Button className="btn btn-lg btn-warning" btnName="ordered now"/>
              {/* <button
                className="btn btn-lg btn-warning "
                style={{ color: "white" }}
              >
                ordered now
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFood;
