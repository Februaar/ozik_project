import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { useAuth } from "../AuthContext";
import "../styles/header.scss";
import { menu } from "../img/index";
import { Status } from "../components/Status";
import Category from "../components/Category";

function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSigninClick = () => {
    navigate("/signin");
  };

  // const handleLogout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       console.log("로그아웃 성공");
  //     })
  //     .catch((err) => {
  //       console.error("로그아웃 실패", err);
  //     });
  // };

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="header-container">
        <Link to="/">
          <h1>오직</h1>
        </Link>
        <div className="right">
          <div className="status-area">
            {user ? (
              <>
                <Status {...user} />
                {/* <button onClick={handleLogout}>로그아웃</button> */}
              </>
            ) : (
              <button onClick={handleSigninClick}>로그인</button>
            )}
          </div>
          <div className="menu" onClick={handleMenuOpen}>
            <img src={menu} alt="Menu" />
          </div>
          {menuOpen ? <Category /> : ""}
        </div>
      </header>
    </>
  );
}

export default Header;
