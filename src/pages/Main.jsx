import "../styles/main.scss";
import { member, profile, starbucks } from "../img/index";

import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import All from "../components/All";
import Products from "../components/Products";

function MainPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate("/signin");
  };

  const handleMyPageClick = () => {
    navigate("/my");
  };

  return (
    <>
      <div className="main-top-container">
        {user ? (
          <>
            <h2 className="main-explan">WELCOME</h2>
            <div className="main-login-info">
              <button
                onClick={handleMyPageClick}
                className="main-member-profile"
              >
                <img
                  src={user.photoURL ? user.photoURL : profile}
                  className="main-member-img"
                />
              </button>
              <button className="main-member-nickname">
                {user.displayName ? user.displayName : "사용자"} 님
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="main-explan">반가워요</h2>
            <div className="main-login-info">
              <button
                onClick={handleSigninClick}
                className="main-member-profile"
              >
                <img src={member} width={24} height={24} />
              </button>
              <button className="main-member-nickname">로그인</button>
            </div>
          </>
        )}
      </div>

      <div className="main-car-container">
        <img src={starbucks} className="main-car-img" />
      </div>
      <nav className="main-nav-container">
        <Link to="/products">전체</Link>
        <Link to="/all">내가 자주 구매하는</Link>
        <Link to="/best">연령별 인기</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="products" element={<Products />} />
        <Route path="all" element={<All />} />
        <Route path="best" element={<Products />} />
      </Routes>
    </>
  );
}

export default MainPage;
