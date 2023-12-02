import { useState } from "react";
import { add, remove } from "../img/index";

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <p className="my-nav-title">장바구니 내역</p>
      <div className="my-cart-container">
        <div className="my-cart-item">
          {/* <img src={starbucks} className="my-cart-img" /> */}
          <div className="my-cart-quantity">
            <button onClick={decrease}>
              <img src={remove} width={18} height={18} />
            </button>
            <span className="my-cart-total">{quantity}</span>
            <button onClick={increase}>
              <img src={add} width={18} height={18} />
            </button>
          </div>
          <button className="my-cart-delete">삭제</button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
