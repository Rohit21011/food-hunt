import Icon from "../shared-components/Icons";
import Image from "../shared-components/Image";

const CategoryHeader = ({title,subTitle}) => {
  return (
    <div className="aboutus">
      <Image
        width="100%"
        height="auto"
        src={require("../../assets/images/about-background.jpg")}
      />

      <div className="content ">
        <h1>{title}</h1>
        <div className="more-links">
          <a href="index.php" >Home</a>
          <Icon className="fa fa-angle-double-right" style={{fontSize: 15}} />
          <span className="about-link">{subTitle}</span>
        </div>
      </div>
    </div>
  );
};
export default CategoryHeader;
