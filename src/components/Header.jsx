import { Link, useLocation } from "react-router-dom";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { useAuth } from "../AuthContext";
import { menu } from "../img/index";
import "../styles/header.scss";

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
    <header className="header-container">
      <Link to="/">
        <h1>오직</h1>
      </Link>
      <div className="right">
        <div className="status">
          {user ? <button onClick={handleLogout}>로그아웃</button> : <button>로그인</button>}
        </div>
        <div className="menu">
          {/* <Link to="/product-list"> */}
          <img src={menu} alt="Menu" />
          {/* </Link> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
