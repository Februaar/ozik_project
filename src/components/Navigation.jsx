import { useContext, useState } from "react";
import { DataContext } from "../context/context";
import { ProductCard } from "./Item";
import "../styles/navigation.scss";

const Navigation = () => {
  const { data, loading } = useContext(DataContext);
  console.log(data);
  const [currentTab, setCurrentTab] = useState("products");

  const handleTabClick = (key) => {
    setCurrentTab(key);
  };

  if (loading) {
    return <p className="loading">상품을 조회중입니다.</p>;
  }

  return (
    <div>
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
    </div>
  );
};

export default Navigation;
