import { useNavigate } from "react-router-dom";
import { useMenu } from "./../context/MenuContext";
import "../styles/menubar.scss";

const MenuBar = () => {
  const { closeMenu } = useMenu();
  const navigate = useNavigate();

  const menudata = [
    { type: "all", description: "전체 둘러보기" },
    { type: "coffee", description: "커피 한 잔 할래요?" },
    { type: "drinks", description: "퇴근 후 맥주 한 잔 어때요?" },
    { type: "snack", description: "영화 볼 땐 과자가 빠지면 안되죠" },
  ];

  const handleMenuClick = (type) => {
    navigate(`product-list/${type}`);
    closeMenu();
  };

  return (
    <div className="menu-backdrop" onClick={closeMenu}>
      <div className="menu-container" onClick={(e) => e.stopPropagation()}>
        <ul className="menu-popover">
          {menudata.map((data, index) => (
            <li
              key={index}
              onClick={() => handleMenuClick(data.type)}
              className="menu-list"
            >
              {data.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
