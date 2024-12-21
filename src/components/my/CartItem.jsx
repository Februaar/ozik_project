import PropTypes from "prop-types";
import { add, remove } from "../../img/index";
import "../../styles/cartitemslist.scss";

const CartItem = ({
  product,
  quantity,
  totalAmount,
  onMinusQuantity,
  onPlusQuantity,
  onDelete,
}) => {
  return (
    <div key={product.id} className="cart-item-container">
      <div>
        <img
          src={product.product.image}
          width={180}
          height={180}
          className="item-img"
        />
      </div>
      <div className="item-quantity">
        <div className="quantity-controls">
          <div onClick={onMinusQuantity} className="quantity-button">
            <img src={remove} width={18} height={18} />
          </div>
          <div className="quantity-total">
            <span>{quantity}</span>
          </div>
          <div onClick={onPlusQuantity} className="quantity-button">
            <img src={add} width={18} height={18} />
          </div>
        </div>
        <div className="total-amounts">
          <span>{totalAmount}</span> 원
        </div>
      </div>
      <div onClick={onDelete} className="delete-button">
        <span>삭제</span>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  totalAmount: PropTypes.number.isRequired,
  onMinusQuantity: PropTypes.func.isRequired,
  onPlusQuantity: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CartItem;
