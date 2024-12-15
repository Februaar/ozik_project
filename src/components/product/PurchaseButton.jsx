import "../../styles/product.scss";

const PurchaseButton = ({ isPurchasing, onPurchaseClick }) => {
  return (
    <button
      onClick={onPurchaseClick}
      className={`button ${isPurchasing ? "clicked" : ""}`}
    >
      구독하기
    </button>
  );
};

export default PurchaseButton;
