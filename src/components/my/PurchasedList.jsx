import { useContext } from "react";
import "../../styles/purchasedlist.scss";
import { DataContext } from "../../context/context";
import PurchasedCard from "./PurchasedCard";

const PurchasedList = () => {
  const { purchasedData } = useContext(DataContext);

  if (!purchasedData || purchasedData.length === 0) {
    return <p className="loading">구매하신 상품이 없습니다.</p>;
  }

  return (
    <div className="purchase-list-container">
      <h3>구매 내역</h3>
      <div className="purchased-lists">
        {purchasedData.map((item) => (
          <div key={item.id} className="purchased-item">
            <div>
              주문 번호:
              <span className="item-number">{item.id}</span>
            </div>
            <ul className="item-lists">
              {item.products.map((product) => (
                <PurchasedCard key={product.id} product={product} />
              ))}
            </ul>
            <div className="ordered-total-amount">
              <span>총 주문 금액: {item.totalAmounts} 원</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchasedList;
