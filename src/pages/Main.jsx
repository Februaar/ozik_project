import { Link, useNavigate } from "react-router-dom";
import "../styles/main.scss";
import { member, starbucks } from "../img/index";

function MainPage() {
  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate("/signin");
  };

  // const handleMyPageClick = () => {
  //   navigate("/my");
  // };

  return (
    <>
      <div className="main-top-container">
        {/* <h2 className="main-explan">WELCOME</h2>
        <div className="main-login-info">
          <button onClick={handleMyPageClick}>
            <img src={member} className="main-member-img" />
          </button>
          <button className="main-member-nickname">경진님</button>
        </div> */}
        <h2 className="main-explan">반가워요</h2>
        <div className="main-login-info">
          <button onClick={handleSigninClick}>
            <img src={member} className="main-member-img" />
          </button>
          <button className="main-member-nickname">로그인</button>
        </div>
      </div>

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
