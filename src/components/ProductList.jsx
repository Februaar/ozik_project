import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/productlist.scss";
import { DataContext } from "../context/context";
import ProductCard from "../components/main/ProductCard";

const ProductList = () => {
  const { data = [], loading } = useContext(DataContext);
  const { type } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (Array.isArray(data.products)) {
      setProducts(data.products);
    }
  }, [data]);

  const filteredProducts =
    type === "all" || !type
      ? products
      : products.filter((product) => product.type === type);

  if (loading) {
    return <p className="loading">상품을 조회중입니다.</p>;
  }

  return (
    <div className="product-list-container">
      <h3 className="product-list-title">
        <span>{type && `${type}`}</span>
      </h3>
      <ul className="product-cards-area">
        {filteredProducts.map((product, index) => (
          <li key={index}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
