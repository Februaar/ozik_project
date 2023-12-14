import "../styles/my.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { PurchaseItem } from "../components/Item";

function PurchaseList() {
  const [purchases, setPurchases] = useState([]);
  console.log(purchases);

  useEffect(() => {
    const fetchPurchasedProductData = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/purchases`);
        setPurchases(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchPurchasedProductData();
  }, []);

  return (
    <>
      <p className="my-nav-title">구매 내역</p>
      {purchases.length === 0 ? (
        <p className="no-data">구매하신 상품이 없습니다.</p>
      ) : (
        <div className="my-purchase-container">
          {purchases.map((purchase) => (
            <div key={purchase.id} className="ordered-box">
              <h3 className="ordered-number">주문 번호: {purchase.id}</h3>
              <ul className="ordered-list">
                {purchase.products.map((item) => (
                  <PurchaseItem key={item.id} item={item}/>
                ))}
              </ul>
              <p className="ordered-amount">
                총 주문 금액: {purchase.totalAmounts} 원
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default PurchaseList;
