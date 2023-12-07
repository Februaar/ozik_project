import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <div className="item">
      <Link to={`/product/${product.id}`}>
        <div className="img-box">
          <img src={product.image} alt={product.name} className="img" />
        </div>
        <div className="info-box">
          <div className="detail">
            <span className="brand">{product.brand}</span>
            <span className="name">{product.name}</span>
          </div>
          <div className="price">
            <span className="won">{product.price}원</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;
