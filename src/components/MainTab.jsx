import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { MainProducts } from "../components/MainProducts";

function MainTab() {
  const [products, setProducts] = useState([]);
  console.log(products);
  const [loading, setLoading] = useState(true);

  const fetchData = async (endpoint) => {
    try {
      const res = await axios.get(`http://localhost:4001/${endpoint}`);
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

  return (
    <>
      <nav className="main-tab-container">
        <Link to="/all" onClick={() => handleTabClick("products")}>
          전체
        </Link>
        <Link to="/purchased" onClick={() => handleTabClick("purchased")}>
          내가 자주 구매하는
        </Link>
        <Link to="/best" onClick={() => handleTabClick("best")}>
          연령별 인기
        </Link>
      </nav>
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
}

export default MainTab;
