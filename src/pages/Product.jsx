import "../styles/product.scss";
import { starbucks } from "../img/index";

function ProductPage() {
  return (
    <div className="product-container">
      <h3 className="product-title">스타벅스</h3>
      <div className="product-content-area">
        <div className="product-area">
          <img src={starbucks} className="pro-img" />
        </div>
        <div className="product-button-area">
          <button className="product-button">구독하기</button>
          <button className="product-button">고민해볼래요</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
