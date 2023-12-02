import "../styles/main.scss";
import { member, profile } from "../img/index";

import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Products from "../components/Products";
import MainCarousel from "../components/MainCarousel";

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
              <span className="main-member-nickname">로그인</span>
            </div>
          </>
        )}
      </div>

      <MainCarousel />
      <nav className="main-nav-container">
        <Link to="/all">전체</Link>
        <Link to="/daily">내가 자주 구매하는</Link>
        <Link to="/best">연령별 인기</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Products />}>
          <Route path="all" element={<Products iconCondition="all" />} />
          <Route path="daily" element={<Products iconCondition="daily" />} />
          <Route path="best" element={<Products iconCondition="best" />} />
        </Route>
      </Routes>
    </>
  );
}

export default MainPage;
