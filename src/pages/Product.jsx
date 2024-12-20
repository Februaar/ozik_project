import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/product.scss";
import ProductDetail from "../components/product/ProductDetail";
import QuantityControl from "../components/product/QuantityControl";
import CartButton from "../components/product/CartButton";
import PurchaseButton from "../components/product/PurchaseButton";
import PrivateRoute from "../components/PrivateRoute";

export default function ProductPage() {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState();
  const [isAdding, setIsAdding] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);

  const { productId } = useParams();
  const navigate = useNavigate();

  const messages = {
    coffee: "☕ 커피로 하루를 시작해보세요",
    snack: "🍫 입맛 없을 땐 달달한 거 어때요?",
    drinks: "🍺 오늘 하루도 수고했어요",
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await axios.get(
          `https://breezy-equatorial-bag.glitch.me/products/${productId}`
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
    if (product) {
      setTotalAmount(product.price * quantity);
    }
  }, [product, quantity]);

  const handleCartClick = async () => {
    try {
      const res = await axios.post(
        "https://breezy-equatorial-bag.glitch.me/cart",
        {
          product,
          quantity,
          totalAmount,
        }
      );
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

  const handlePurchaseClick = () => {
    try {
      navigate("/my/purchase");
      setIsPurchasing(!isPurchasing); // TODO: 구매 확인 팝업 띄우기 => 바로 구매
    } catch (err) {
      console.error("상품을 구매하는 중 오류 발생:", err);
    }
  };

  if (loading) {
    return <span>상품 데이터를 불러오는 중입니다.</span>;
  }

  return (
    <div className="product-page-container">
      <h3 className="product-page-title">{messages[product.type]}</h3>

      <div className="product-detail-container">
        <div className="detail-img-area">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-content-area">
          <ProductDetail product={product} />

          <QuantityControl
            quantity={quantity}
            totalAmount={totalAmount}
            onQuantityChange={setQuantity}
            onTotalAmountChange={setTotalAmount}
          />
        </div>
      </div>

      <div className="product-button-area">
        <div className="product-buttons">
          <CartButton isAdding={isAdding} onCartClick={handleCartClick} />
          <PurchaseButton
            isPurchasing={isPurchasing}
            onPurchaseClick={handlePurchaseClick}
          />
        </div>
      </div>
    </div>
  );
}
