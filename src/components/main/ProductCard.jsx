import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/item.scss";

const ProductCard = ({ ...item }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${item.productId}`}>
        <div className="product-img">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="product-detail-box">
          <div className="product-detail">
            <span className="brand">{item.brand}</span>
            <span className="name">{item.name}</span>
          </div>
          <div className="product-price">
            <span className="price">{item.price}원</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productId: PropTypes.number.isRequired,
    brand: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }),
};

export default ProductCard;
