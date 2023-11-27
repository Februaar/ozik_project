import { Link, Routes, Route } from "react-router-dom";
import "../styles/my.scss";
import { profile } from "../img/index";
import MyProfile from "../components/MyProfile";
import PurchaseList from "../components/PurchaseList";
import CartItem from "../components/CartItem";

function MyPage() {
  return (
    <>
      <div className="my-profile-container">
        <img src={profile} className="my-profile-img" />
        <span className="my-nick">경진</span>
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
        <Route path="profile" element={<MyProfile />} />
        <Route path="purchase-history" element={<PurchaseList />} />
        <Route path="cart" element={<CartItem />} />
      </Routes>
    </>
  );
}

export default MyPage;
