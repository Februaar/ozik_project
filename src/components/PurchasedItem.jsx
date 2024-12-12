import "../styles/purchaseList.scss";
import PropTypes from "prop-types";
import { PurchasedCard } from "./Item";

export default function PurchasedItem({ datas }) {
  return (
    <div className="purchase-list-item">
      {Array.isArray(datas) ? (
        datas.map((item) => (
          <div key={item.id} className="ordered-box">
            <div className="ordered-number">
              <span>주문 번호: {item.id}</span>
            </div>
            <ul className="ordered-list">
              <PurchasedCard item={item} />
            </ul>
            <div className="ordered-total-amount">
              <span>총 주문 금액: {item.totalAmounts} 원</span>
            </div>
          </div>
        ))
      ) : (
        <p>구매 데이터가 없습니다.</p>
      )}
    </div>
  );
}

PurchasedItem.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      totalAmounts: PropTypes.number.isRequired,
    })
  ).isRequired,
};
