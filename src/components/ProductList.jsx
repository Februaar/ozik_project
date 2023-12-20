import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {ProductItem} from "../components/Item";

function ProductList() {
  const { type } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await axios.get("https://breezy-equatorial-bag.glitch.me/products");
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProductData();
  }, []);

  const filteredProducts =
    type === "all"
      ? products
      : products.filter((product) => product.type === type);

  return (
    <div className="product-list-container">
      <div className="title-area">
        <h3 className="title">{type && `${type}`}</h3>
      </div>
      {loading ? (
        <p className="loading">상품 데이터를 불러오는 중입니다.</p>
      ) : (
        <div className="product-item-container">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
