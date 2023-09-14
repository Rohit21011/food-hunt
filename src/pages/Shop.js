import CategoryHeader from "../components/layout/CategoryHeader";
import CategoryCard from "../components/shared-components/CategoryCard";
import ItemCard from "../components/shared-components/ItemCard";
import Pizza from "../assets/foodImages/Supreme Pizza.png";
const Shop = () => {
  return (
    <>
      <CategoryHeader title="Shop" subTitle="Shop" />
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="col-2 ml-3 d-none d-md-block  category-layout ">
            <CategoryCard />
          </div>
          <div className="col-12 col-md-9 " style={{}}>
            <div className="row justify-content-around" id="show-all-products">
              <ItemCard
                imageName={Pizza}
                price="200"
                itemName="suprem pizza"
                description="delitios"
                rating="3.5/5"
              />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Shop;
