import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/product.scss";
import { add, remove } from "../img";

function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4001/products/${productId}`
        );
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProductData();
  }, [productId]);

  useEffect(() => {
    if (product.price) {
      setTotalAmount(product.price * quantity);
    }
  }, [product, quantity]);

  const handlePurchaseClick = () => {
    setIsPurchasing(!isPurchasing);
    setIsAdding(false);
  };

  const handleCartClick = async () => {
    try {
      const res = await axios.post("http://localhost:4001/cart", {
        product,
        quantity,
        totalAmount,
      });
      if (res.status === 200) {
        alert("상품이 장바구니에 추가되었습니다.");
      }
      navigate("/my/cart");
      setIsAdding(!isAdding);
      setIsPurchasing(false);
    } catch (err) {
      console.error("상품을 추가하는 중 오류 발생:", err);
    }
  };

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

  return (
    <>
      {loading ? (
        <span>상품 데이터를 불러오는 중입니다.</span>
      ) : (
        <>
          <h3 className="product-detail-title">
            ☕ 커피로 하루를 시작해보세요
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
            <div className="button-area">
              <button
                onClick={handleCartClick}
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
      )}
    </>
  );
}

export default ProductPage;
