const HowItWorks = ({image,steps,title,arrowImage}) => {
    console.log(arrowImage);
  return (
    <div className="col-lg-3 col-sm-5 col-8 ">
      <div className="how-it-works">
        <img src={image} />
        <span>{steps}</span>
        <p>{title}</p>
      </div>
      <div className="arrow d-xl-block d-none">
        {arrowImage?<img src={arrowImage}/>:""}
        
      </div>
    </div>
  );
};

export default HowItWorks;
