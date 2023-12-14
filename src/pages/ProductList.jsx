import { CategoryButton } from "../components/Button";

function ProductListPage() {
  return (
    <div className="category-list-container">
      <h3 className="category-list-title">카테고리를 선택해주세요</h3>
      <div className="category-type">
        <CategoryButton type="all" label="전체 둘러보기" emoji="" />
        <CategoryButton type="coffee" label="커피 한 잔 할래요?" emoji="☕" />
        <CategoryButton type="drinks" label="퇴근 후 맥주 한 잔!" emoji="🥤" />
        <CategoryButton type="snack" label="영화 볼 땐 과자가 빠지면 안되죠" emoji="🍿" />
      </div>
    </div>
  );
}

export default ProductListPage;
