import "../styles/category.scss";

export default function Category() {
  const menudata = [
    { type: "all", description: "전체 둘러보기" },
    { type: "coffee", description: "커피 한 잔 할래요?" },
    { type: "drinks", description: "퇴근 후 맥주 한 잔 어때요?" },
    { type: "snack", description: "영화 볼 땐 과자가 빠지면 안되죠" },
  ];

  return (
    <div className="category-container">
      <ul className="menu-popover">
        {menudata.map((data, index) => (
          <li key={index} type={data.type}>
            {data.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
