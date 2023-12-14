import axios from "axios";
import { useState, useEffect } from "react";
import { ProductItem } from "../components/Item";

function MainProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await axios.get("http://localhost:4001/products");
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProductData();
  }, []);

  return (
    <>
      {loading ? (
        <p className="loading">상품 데이터를 불러오는 중입니다.</p>
      ) : (
        <div className="product-item-container">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default MainProducts;
