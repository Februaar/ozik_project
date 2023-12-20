import "../styles/main.scss";
import { menu, search } from "../img/index";

import { Link, useLocation } from "react-router-dom";
import { auth } from "../../firebase-config";
import { useAuth } from "../AuthContext";
import { signOut } from "firebase/auth";

function Header() {
  const { user } = useAuth();
  const location = useLocation();

  if (location.pathname === "/search") {
    return null;
  }

  const handleLogout = () => {
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
      <div className="icon-container">
        <button onClick={handleLogout} className="login-icon">
          {user ? "로그아웃" : ""}
        </button>
        <Link to="/search" className="search-icon">
          <img src={search} alt="Search" />
        </Link>
        <Link to="/product-list" className="category-icon">
          <img src={menu} alt="Menu"></img>
        </Link>
      </div>
    </section>
  );
}

export default Header;
