import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "../../styles/my.scss";
import ProfileEdit from "../../components/my/ProfileEdit";
import PurchaseList from "../../components/my/PurchaseList";
import CartList from "../../components/my/CartList";

const MyNav = () => {
  const [isSelected, setIsSelected] = useState(null);

  const handleNavClick = (key) => {
    setIsSelected(key);
  };

  const navItems = [
    {
      path: "/my/profile",
      key: "profile",
      label: "프로필",
      component: ProfileEdit,
    },
    {
      path: "/my/purchase",
      key: "purchase",
      label: "구매내역",
      component: PurchaseList,
    },
    {
      path: "/my/cart",
      key: "cart",
      label: "장바구니",
      component: CartList,
    },
  ];

  return (
    <>
      <nav className="my-nav-container">
        {navItems.map(({ path, key, label }) => (
          <Link
            key={key}
            to={path}
            onClick={() => handleNavClick(key)}
            className={`nav-link${isSelected === key ? " selected" : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Routes>
        {navItems.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path.replace("/my", "")}
            element={<Component />}
          />
        ))}
        <Route path="" element={<ProfileEdit />} />
      </Routes>
    </>
  );
};

export default MyNav;
