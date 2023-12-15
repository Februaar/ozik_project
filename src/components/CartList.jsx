import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../components/Item";

function CartList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  console.log(products);
  const [quantities, setQuantities] = useState([]);
  const [totalAmounts, setTotalAmounts] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const res = await axios.get("https://breezy-equatorial-bag.glitch.me/cart");
        setProducts(res.data);

        const initialQuantities = {};
        const initialTotalAmounts = {};
        res.data.forEach((product) => {
          initialQuantities[product.id] = product.quantity;
          initialTotalAmounts[product.id] = product.totalAmount;
        });
        setQuantities(initialQuantities);
        setTotalAmounts(initialTotalAmounts);
      } catch (err) {
        console.error("Error fetching cart data:", err);
      }
    };

    fetchCartData();
  }, []);

  const handlePlusQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));

    setTotalAmounts((prevTotalAmounts) => ({
      ...prevTotalAmounts,
      [id]:
        (quantities[id] + 1) *
        products.find((product) => product.id === id).product.price,
    }));
  };

  const handleMinusQuantity = (id) => {
    if (quantities[id] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));

      setTotalAmounts((prevTotalAmounts) => ({
        ...prevTotalAmounts,
        [id]:
          (quantities[id] - 1) *
          products.find((product) => product.id === id).product.price,
      }));
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://breezy-equatorial-bag.glitch.me/cart/${id}`);

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("상품 정보를 삭제하는 중 오류 발생:", error);
    }
  };

  const handlePurchase = async () => {
    try {
      await axios.post("https://breezy-equatorial-bag.glitch.me/purchases", {
        products,
      });

      const purchaseData = products.map((product) => ({
        productId: product.product.id,
        brand: product.product.brand,
        name: product.product.name,
        price: product.product.price,
        image: product.product.image,
      }));

      await Promise.all(
        purchaseData.map(async (product) => {
          await axios.post("https://breezy-equatorial-bag.glitch.me/purchased", product);
        })
      );

      navigate("/my/purchase");
    } catch (error) {
      console.error("구매 정보를 서버에 전송하는 중 오류 발생:", error);
    }
  };

  return (
    <>
      <div className="my-nav-title">장바구니 내역</div>
      {products.length === 0 ? (
        <p className="no-data">장바구니에 담긴 상품이 없습니다.</p>
      ) : (
        <>
          <div className="my-cart-container">
            {products.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                quantity={quantities[product.id]}
                totalAmount={totalAmounts[product.id]}
                onMinusQuantity={() => handleMinusQuantity(product.id)}
                onPlusQuantity={() => handlePlusQuantity(product.id)}
                onDelete={() => handleDelete(product.id)}
              />
            ))}
          </div>
          <div className="order-button">
            <button onClick={handlePurchase}>전체 구매하기</button>
          </div>
        </>
      )}
    </>
  );
}

export default CartList;
