import { useContext, useState } from "react";
import "../styles/navigation.scss";
import { DataContext } from "../context/context";
import { ProductCard } from "./Item";

const Navigation = () => {
  const { data, loading } = useContext(DataContext);
  const [currentTab, setCurrentTab] = useState("products");

  const handleTabClick = (key) => {
    setCurrentTab(key);
  };

  if (loading) {
    return <p className="loading">상품을 조회중입니다.</p>;
  }

  return (
    <>
      <nav className="main-tab">
        {Object.keys(data).map((key) => (
          <button
            key={key}
            onClick={() => handleTabClick(key)}
            style={{
              fontWeight: currentTab === key ? "bold" : "normal",
            }}
          >
            {key}
          </button>
        ))}
      </nav>

      <ul className="product-cards-container">
        {data[currentTab]?.map((item, index) => (
          <li key={index}>
            <ProductCard {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navigation;
