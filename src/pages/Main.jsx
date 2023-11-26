import { Link } from "react-router-dom";
import "../styles/main.scss";
import { starbucks } from "../img/index";

function MainPage() {
  return (
    <>
      <h2 className="main-explan">반가워요</h2>
      <div className="main-car-container">
        <img src={starbucks} className="main-car-img" />
      </div>
      <nav className="main-nav-container">
        <div>전체</div>
        <div>내가 자주 구매하는</div>
        <div>연령별 인기</div>
      </nav>
      <div className="main-product-container">
        <Link to="/product">
          <img src={starbucks} className="main-pro-img" />
        </Link>
        <img src={starbucks} className="main-pro-img" />
        <img src={starbucks} className="main-pro-img" />
        <img src={starbucks} className="main-pro-img" />
        <img src={starbucks} className="main-pro-img" />
        <img src={starbucks} className="main-pro-img" />
      </div>
    </>
  );
}

export default MainPage;
