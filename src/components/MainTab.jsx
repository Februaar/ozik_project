import { Link, Routes, Route } from "react-router-dom";
import MainProducts from "../components/MainProducts";

function MainTab() {
  return (
    <>
      <nav className="main-tab-container">
        <Link to="/all">전체</Link>
        <Link to="/daily">내가 자주 구매하는</Link>
        <Link to="/best">연령별 인기</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainProducts />}>
          <Route path="all" element={<MainProducts iconCondition="all" />} />
          <Route
            path="daily"
            element={<MainProducts iconCondition="daily" />}
          />
          <Route path="best" element={<MainProducts iconCondition="best" />} />
        </Route>
      </Routes>
    </>
  );
}

export default MainTab;
