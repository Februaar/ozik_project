/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/cartitemslist.scss";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [totalAmounts, setTotalAmounts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const res = await axios.get(
          "https://breezy-equatorial-bag.glitch.me/cart"
        );
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
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [id]: prevQuantities[id] + 1,
      };
      setTotalAmounts((prevTotalAmounts) => ({
        ...prevTotalAmounts,
        [id]:
          newQuantities[id] *
          products.find((product) => product.id === id).product.price,
      }));
      return newQuantities;
    });
  };

  const handleMinusQuantity = (id) => {
    setQuantities((prevQuantities) => {
      if (quantities[id] > 1) {
        const newQuantities = {
          ...prevQuantities,
          [id]: prevQuantities[id] - 1,
        };
        setTotalAmounts((prevTotalAmounts) => ({
          ...prevTotalAmounts,
          [id]:
            newQuantities[id] *
            products.find((product) => product.id === id).product.price,
        }));
        return newQuantities;
      }
      return prevQuantities;
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://breezy-equatorial-bag.glitch.me/cart/${id}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
      setQuantities((prevQuantities) => {
        const update = { ...prevQuantities };
        delete update[id];
        return update;
      });
      setTotalAmounts((prevTotalAmounts) => {
        const update = { ...prevTotalAmounts };
        delete update[id];
        return update;
      });
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
          await axios.post(
            "https://breezy-equatorial-bag.glitch.me/purchased",
            product
          );
        })
      );

      navigate("/my/purchase");
    } catch (error) {
      console.error("구매 정보를 서버에 전송하는 중 오류 발생:", error);
    }
  };

  const TotalSum = ({ totalAmounts }) => {
    const total = Object.values(totalAmounts).reduce(
      (sum, value) => sum + value,
      0
    );
    return <div className="total-sum">총액: {total}</div>;
  };

  return (
    <div className="cart-list-container">
      <h3>장바구니 내역</h3>
      <div className="cart-list-items">
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
      <TotalSum totalAmounts={totalAmounts} />
      <div className="order-button">
        <button onClick={handlePurchase}>전체 구매하기</button>
      </div>
    </div>
  );
};

export default CartItemsList;
