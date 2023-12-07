import { useState } from "react";
import "../../styles/product.scss";
import { illyCapsule } from "../../img";

function ProductPage() {
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handlePurchaseClick = () => {
    setIsPurchasing(!isPurchasing);
    setIsAdding(false);
  };

  const handleAddClick = () => {
    setIsAdding(!isAdding);
    setIsPurchasing(false);
  };

  return (
    <>
      <h3 className="product-detail-title">☕ 커피로 하루를 시작해보세요</h3>
      <div className="product-detail-container">
        <div className="detail-area">
          <div className="img-area">
            <img src={illyCapsule} className="img" />
          </div>
          <div className="content-area">
            <span className="brand">Starbucks</span>
            <span className="name">스타벅스 캡슐커피</span>
            <span>18000원</span>
          </div>
        </div>
        <div className="button-area">
          <button
            onClick={handleAddClick}
            className={`button ${isAdding ? "clicked" : ""}`}
          >
            고민해볼래요
          </button>
          <button
            onClick={handlePurchaseClick}
            className={`button ${isPurchasing ? "clicked" : ""}`}
          >
            구독하기
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
