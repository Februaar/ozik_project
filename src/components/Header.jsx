import "../styles/header.scss";
import { menu, search } from "../img/index";

import { Link, useLocation } from "react-router-dom";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { useAuth } from "../AuthContext";

function Header() {
  const { user } = useAuth();
  const location = useLocation();

  if (location.pathname === "/search") {
    return null;
  }

  const handleGoogleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("로그아웃 성공");
      })
      .catch((err) => {
        console.error("로그아웃 실패", err);
      });
  };

  return (
    <section className="header-container">
      <Link to="/" className="logo">
        OZIK
      </Link>
      <div className="header-icon-container">
        <span onClick={handleGoogleLogout} className="header-login-icon">
          {user ? "로그아웃" : ""}
        </span>
        <Link to="/search" className="header-search-icon">
          <img src={search} alt="Search" />
        </Link>
        <img src={menu} alt="Menu"></img>
      </div>
    </section>
  );
}

export default Header;
