import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { add, remove } from "../img/index";

function CartItem() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const productId = searchParams.get("productId");
  const initialQuantity = parseInt(searchParams.get("quantity"));
  const initialTotalAmount = parseInt(searchParams.get("totalAmount"));

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(initialQuantity);
  const [totalAmount, setTotalAmount] = useState(initialTotalAmount);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4001/products/${productId}`
        );
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProductData();
  }, [productId]);

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
    setTotalAmount((quantity + 1) * product.price);
  };

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalAmount((quantity - 1) * product.price);
    }
  };

  return (
    <>
      <div className="my-nav-title">장바구니 내역</div>
      {product.length === 0 ? (
        <p className="no-data">장바구니에 담긴 상품이 없습니다.</p>
      ) : (
        <div className="my-cart-container">
          <div key={product.id} className="cart-item">
            <img src={product.image} className="item-img" />
            <div className="quantity-area">
              <div className="quantity-controls">
                <button onClick={handleMinusQuantity}>
                  <img src={remove} width={18} height={18} />
                </button>
                <span className="item-total">{quantity}</span>
                <button onClick={handlePlusQuantity}>
                  <img src={add} width={18} height={18} />
                </button>
              </div>
              <span>{totalAmount} 원</span>
            </div>
            <button className="item-delete">삭제</button>
          </div>
        </div>
      )}
      <div className="order-button">
        <button>전체 구매하기</button>
      </div>
    </>
  );
}

export default CartItem;
