import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { add, remove } from "../img/index";

function CartItem() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [totalAmounts, setTotalAmounts] = useState([]);
  console.log(products);
  console.log(quantities);
  console.log(totalAmounts);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/cart`);
        setProducts(res.data);

        // 초기값으로 각 상품의 수량과 총액을 가져온 데이터로 설정
        const initialQuantities = {};
        const initialTotalAmounts = {};
        res.data.forEach((product) => {
          initialQuantities[product.id] = product.quantity;
          initialTotalAmounts[product.id] = product.totalAmount;
        });
        setQuantities(initialQuantities);
        setTotalAmounts(initialTotalAmounts);
      } catch (err) {
        console.error("Error fetching cart data:", err);
      }
    };

    fetchCartData();
  }, []);

  const handlePlusQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));

    setTotalAmounts((prevTotalAmounts) => ({
      ...prevTotalAmounts,
      [id]:
        (quantities[id] + 1) *
        products.find((product) => product.id === id).product.price,
    }));
  };

  const handleMinusQuantity = (id) => {
    if (quantities[id] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));

      setTotalAmounts((prevTotalAmounts) => ({
        ...prevTotalAmounts,
        [id]:
          (quantities[id] - 1) *
          products.find((product) => product.id === id).product.price,
      }));
    }
  };

  const handlePurchase = async () => {
    try {
      await axios.post(`http://localhost:4001/purchases`);
      navigate("/my/purchase-history");
    } catch (error) {
      console.error("구매 정보를 서버에 전송하는 중 오류 발생:", error);
    }
  };

  return (
    <>
      <div className="my-nav-title">장바구니 내역</div>
      {products.length === 0 ? (
        <p className="no-data">장바구니에 담긴 상품이 없습니다.</p>
      ) : (
        <div className="my-cart-container">
          {products.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.product.image} className="item-img" />
              <div className="quantity-area">
                <div className="quantity-controls">
                  <button onClick={() => handleMinusQuantity(product.id)}>
                    <img src={remove} width={18} height={18} />
                  </button>
                  <span className="item-total">{quantities[product.id]}</span>
                  <button onClick={() => handlePlusQuantity(product.id)}>
                    <img src={add} width={18} height={18} />
                  </button>
                </div>
                <span>{totalAmounts[product.id]} 원</span>
              </div>
              <button className="item-delete">삭제</button>
            </div>
          ))}
        </div>
      )}
      <div className="order-button">
        <button onClick={handlePurchase}>전체 구매하기</button>
      </div>
    </>
  );
}

export default CartItem;
