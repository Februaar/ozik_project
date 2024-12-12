import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/item.scss";

export const ProductCard = ({ ...item }) => {
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

export const PurchasedCard = ({ item }) => {
  if (!item?.product) {
    return <li className="ordered-item">상품 데이터가 없습니다.</li>;
  }
  console.log(item);

  return (
    <li className="ordered-item">
      <img
        src={item.product.image || "placeholder.jpg"}
        alt={item.product.name || "상품 이미지"}
        className="item-img"
      />
      <div className="item-detail">
        <p className="detail">{item.product.name}</p>
        <p className="detail">수량: {item.quantity}</p>
        <p className="detail">총액: {item.totalAmount} 원</p>
      </div>
    </li>
  );
};

PurchasedCard.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.shape({
      image: PropTypes.string.isRequired, // 상품 이미지 URL
      name: PropTypes.string.isRequired, // 상품 이름
    }).isRequired,
    quantity: PropTypes.number.isRequired, // 수량
    totalAmount: PropTypes.number.isRequired, // 총액
  }).isRequired,
};

// export function PurchaseItem({ item }) {
//   return (
//     <li className="ordered-item">
//       <img
//         src={item.product.image}
//         alt={item.product.name}
//         className="item-img"
//       />
//       <div className="item-detail">
//         <p className="detail">{item.product.name}</p>
//         <p className="detail">수량: {item.quantity}</p>
//         <p className="detail">총액: {item.totalAmount} 원</p>
//       </div>
//     </li>
//   );
// }

// PurchaseItem.propTypes = {
//   item: PropTypes.object.isRequired,
// };

// export function CartItem({
//   product,
//   quantity,
//   totalAmount,
//   onMinusQuantity,
//   onPlusQuantity,
//   onDelete,
// }) {
//   return (
//     <div key={product.id} className="cart-item">
//       <img src={product.product.image} className="item-img" />
//       <div className="quantity-area">
//         <div className="quantity-controls">
//           <button onClick={onMinusQuantity}>
//             <img src={remove} width={18} height={18} />
//           </button>
//           <span className="item-total">{quantity}</span>
//           <button onClick={onPlusQuantity}>
//             <img src={add} width={18} height={18} />
//           </button>
//         </div>
//         <span>{totalAmount} 원</span>
//       </div>
//       <button onClick={onDelete} className="item-delete">
//         삭제
//       </button>
//     </div>
//   );
// }

// CartItem.propTypes = {
//   product: PropTypes.object.isRequired,
//   quantity: PropTypes.number.isRequired,
//   totalAmount: PropTypes.number.isRequired,
//   onMinusQuantity: PropTypes.func.isRequired,
//   onPlusQuantity: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
