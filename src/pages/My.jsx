import { Link, Routes, Route } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "../styles/my.scss";
import { profile } from "../img/index";
import SignIn from "./SignIn";
import MyProfile from "../components/MyProfile";
import PurchaseList from "../components/PurchaseList";
import CartItem from "../components/CartItem";

function MyPage() {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          <div className="my-profile-container">
            <img
              src={user.photoURL ? user.photoURL : profile}
              className="my-profile-img"
            />
            <span className="my-nick">{user.displayName}</span>
          </div>
          <nav className="my-nav-container">
            <Link to="/my/profile" className="my-nav-button">
              프로필
            </Link>
            <Link to="/my/purchase-history" className="my-nav-button">
              구매내역
            </Link>
            <Link to="/my/cart" className="my-nav-button">
              장바구니
            </Link>
          </nav>
          <Routes>
            <Route path="" element={<MyProfile />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="purchase-history" element={<PurchaseList />} />
            <Route path="cart" element={<CartItem />} />
          </Routes>
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default MyPage;
