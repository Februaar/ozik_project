import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { MainProducts } from "../components/MainProducts";
import "../styles/maintab.scss";

const MainTab = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  const fetchData = async (endpoint) => {
    try {
      const res = await axios.get(
        `https://breezy-equatorial-bag.glitch.me/${endpoint}`
      );
      return res.data;
    } catch (err) {
      console.error(`Error fetching products for ${endpoint}:`, err);
    }
  };

  const handleTabClick = async (endpoint) => {
    setLoading(true);
    const data = await fetchData(endpoint);
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    handleTabClick("products");
  }, []);

  const [activeTab, setActiveTab] = useState();

  const tabContent = [
    {
      path: "/all",
      title: "All",
    },
    {
      path: "/purchased",
      title: "Purchased",
    },
    {
      path: "/best",
      title: "Recommend",
    },
  ];

  const handleTabClick = (key) => {
    console.log(`${key} 탭 클릭`);
    setActiveTab(key);
  };

  return (
    <>
      <div className="main-tab">
        {tabContent.map((data, index) => (
          <Link
            key={index}
            href="data.path"
            onClick={() => handleTabClick(data.path)}
          >
            <span
              style={{
                margin: "0 10px",
                fontWeight: activeTab === data.path ? "bold" : "normal",
              }}
            >
              {data.title}
            </span>
          </Link>
        ))}
      </div>

      {/* <Routes>
        <Route
          path="/"
          element={<MainProducts products={products} loading={loading} />}
        >
          <Route
            path="all"
            element={
              <MainProducts
                iconCondition="all"
                products={products}
                loading={loading}
              />
            }
          />
          <Route
            path="purchased"
            element={
              <MainProducts
                iconCondition="purchased"
                products={products}
                loading={loading}
              />
            }
          />
          <Route
            path="best"
            element={
              <MainProducts
                iconCondition="best"
                products={products}
                loading={loading}
              />
            }
          />
        </Route>
      </Routes> */}
    </>
  );
};

export default MainTab;
