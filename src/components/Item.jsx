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
