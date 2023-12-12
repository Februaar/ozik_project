import axios from "axios";
import { useState, useEffect } from "react";

function PurchaseList() {
  const [products, setProducts] = useState({});
  console.log(products);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/purchases`);
        setProducts(res.data);
      } catch (err) {
        console.err("Error fetching product:", err);
      }
    };

    fetchProductData();
  }, []);

  return (
    <>
      <p className="my-nav-title">구매 내역</p>
      {products.length === 0 ? (
        <p className="no-data">구매하신 상품이 없습니다.</p>
      ) : (
        // <div className="my-purchased-container">
        //   <div key={products.id} className="my-purchsed-item"></div>
        // </div>
        <div className="my-cart-container">
          {products.length > 0 &&
            products.map((product) => {
              <div key={product.id} className="cart-item">
                <img src={product.image} className="item-img" />
                <div className="quantity-area">
                  <div className="quantity-controls">
                    <span className="item-total">{product.quantity}</span>
                  </div>
                  <span>{product.totalAmount} 원</span>
                </div>
                <button className="item-delete">삭제</button>
              </div>;
            })}
        </div>
      )}
    </>
  );
}

export default PurchaseList;
