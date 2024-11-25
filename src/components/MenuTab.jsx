import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { MainProducts } from "../components/MainProducts";
import "../styles/menutab.scss";

const MenuTab = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <div className="menu-tab">
        {tabContent.map((data, index) => (
          <Link key={index} href="data.path">
            <span>{data.title}</span>
          </Link>
        ))}
      </div>
      <Routes>
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
      </Routes>
    </>
  );
};

export default MenuTab;
