import { maratang } from "../img/index";

import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="main-product-container">
      <Link to="/product">
        <img src={maratang} className="main-pro-img" />
      </Link>
      <img src={maratang} className="main-pro-img" />
      <img src={maratang} className="main-pro-img" />
      <img src={maratang} className="main-pro-img" />
      <img src={maratang} className="main-pro-img" />
      <img src={maratang} className="main-pro-img" />
    </div>
  );
}

export default Products;
