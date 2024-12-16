import PropTypes from "prop-types";
import "../../styles/item.scss";

const PurchasedCard = ({ product }) => {
  if (!product?.product) {
    return <li className="ordered-item">상품 데이터가 없습니다.</li>;
  }

  return (
    <li className="ordered-item">
      <div className="item-img">
        <img
          src={product.product.image || "placeholder.jpg"}
          alt={product.product.name || "상품 이미지"}
        />
      </div>
      <div className="item-detail">
        <p>{product.product.name}</p>
        <p>수량: {product.quantity}</p>
        <p>총액: {product.totalAmount} 원</p>
      </div>
    </li>
  );
};

PurchasedCard.propTypes = {
  product: PropTypes.shape({
    product: PropTypes.shape({
      brand: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      productId: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
    totalAmount: PropTypes.number.isRequired,
  }).isRequired,
};

export default PurchasedCard;
