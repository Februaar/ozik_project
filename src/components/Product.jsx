import axios from "axios";
import { useState, useEffect } from "react";
import { add, remove } from "../img";
import "../styles/product.scss";

const Product = () => {
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

  const handleClear = () => {
    setQuantity(1);
    setTotalAmount();
  };

  if (loading) {
    return <span>상품 데이터를 불러오는 중입니다.</span>;
  }

  return (
    <>
      <h3 className="product-detail-title">
        {product.type === "coffee"
          ? "☕ 커피로 하루를 시작해보세요"
          : product.type === "snack"
          ? "🍫 입맛 없을 땐 달달한 거 어때요?"
          : "🍺 오늘 하루도 수고했어요"}
      </h3>
      <div className="product-detail-container">
        <div className="detail-area">
          <div className="img-area">
            <img src={product.image} className="img" />
          </div>
          <div className="content-area">
            <span className="brand">{product.brand}</span>
            <span className="name">{product.name}</span>
            <span>{product.price} 원</span>
          </div>
          <div className="quantity-area">
            <div className="quantity-controls">
              <button onClick={handleMinusQuantity}>
                <img src={remove} width={18} height={18} />
              </button>
              <span>{quantity}</span>
              <button onClick={handlePlusQuantity}>
                <img src={add} width={18} height={18} />
              </button>
            </div>
            <span>{totalAmount} 원</span>
            <button onClick={handleClear} className="my-cart-delete">
              취소
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

import { useParams } from "react-router-dom";
import Product from "../components/Product";
import Purchase from "../components/Purchase";

export default function ProductPage() {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState();
  
  const { productId } = useParams();

  return (
    <>
      <Product id={productId} />
      <Purchase />
    </>
  );
}
