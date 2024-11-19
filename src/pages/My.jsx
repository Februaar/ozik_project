import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "../styles/my.scss";
import { profile } from "../img/index";
import { useAuth } from "../AuthContext";
import EditProfile from "../components/EditProfile";
import PurchaseList from "../components/PurchaseList";
import CartList from "../components/CartList";
import SignIn from "./SignIn";

function MyPage() {
  const { user } = useAuth();
  const [isSelected, setIsSelected] = useState(null);

  const handleNavClick = (navName) => {
    setIsSelected(navName);
  };

  return (
    <>
      {user ? (
        <>
          <div className="my-profile-container">
            <img
              src={user.photoURL ? user.photoURL : profile}
              className="profile-img"
            />
            <span className="nickname">{user.displayName}</span>
          </div>
          <nav className="my-nav-container">
            <Link
              to="/my/profile"
              className={`nav-button${
                isSelected === "profile" ? " selected" : ""
              }`}
              onClick={() => handleNavClick("profile")}
            >
              프로필
            </Link>
            <Link
              to="/my/purchase"
              className={`nav-button${
                isSelected === "purchase" ? " selected" : ""
              }`}
              onClick={() => handleNavClick("purchase")}
            >
              구매내역
            </Link>
            <Link
              to="/my/cart"
              className={`nav-button${
                isSelected === "cart" ? " selected" : ""
              }`}
              onClick={() => handleNavClick("cart")}
            >
              장바구니
            </Link>
          </nav>
          <Routes>
            <Route path="" element={<EditProfile />} />
            <Route path="profile" element={<EditProfile />} />
            <Route path="purchase" element={<PurchaseList />} />
            <Route path="cart" element={<CartList />} />
          </Routes>
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default MyPage;
