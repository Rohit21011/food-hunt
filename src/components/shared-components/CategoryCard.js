import Icon from "./Icons";

const CategoryCard = () => {
  return (
    <>

        <h5 className="mt-2 ml-3">Categories</h5>
        <ul className="category-background">
          <li className="product-category">
            <a href="product-categories.php" id="burger">
                <Icon className="	fas fa-hamburger "/>
              <span>Burger</span>
            </a>
            <span className="count" />
          </li>
          <li className="product-category">
            <a href="product-categories.php" id="pizza">
            <Icon  className="fas fa-pizza-slice "/>
              <span>Pizza</span>
            </a>
            <span className="count" />
          </li>
          <li className="product-category">
            <a href="product-categories.php" id="non-veg">
                
             <Icon className="fas fa-drumstick-bite "/>
              <span>None Veg</span>
            </a>
            <span className="count" />
          </li>
          <li className="product-category">
            <a href="product-categories.php" id="cold-drinks">
                <Icon className="fas fa-glass-martini-alt "/>
              <span>Cold Drinks</span>
            </a>
            <span className="count" />
          </li>
          <li className="product-category">
            <a href="product-categories.php" id="other">
                <Icon className="	fas fa-utensils " />
            
              <span>Other</span>
            </a>
            <span className="count">(0)</span>
          </li>
        </ul>
    
    </>
  );
};

export default CategoryCard;
