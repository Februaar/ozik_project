import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function ProductItem({ product }) {

  return (
    <div className="product-area">
      <Link to={`/product/${product.productId}`}>
        <div className="img-box">
          <img src={product.image} alt={product.name} className="img" />
        </div>
        <div className="content-box">
          <div className="content-detail">
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
    productId: PropTypes.number.isRequired,
    brand: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }),
};

export function PurchaseItem({ item }) {
  return (
    <li className="ordered-item">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="item-img"
      />
      <div className="item-detail">
        <p className="detail">{item.product.name}</p>
        <p className="detail">수량: {item.quantity}</p>
        <p className="detail">총액: {item.totalAmount} 원</p>
      </div>
    </li>
  );
}

PurchaseItem.propTypes = {
  item: PropTypes.object.isRequired,
};

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
