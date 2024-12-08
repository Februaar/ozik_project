import "../styles/main.scss";
import { useMenu } from "../context/MenuContext";
import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel";
import Category from "../components/Category";

function MainPage() {
  const { menuOpen } = useMenu();

  return (
    <div className="main-container">
      <Carousel />
      <Navigation />
      {menuOpen ? <Category /> : ""}
    </div>
  );
}

export default MainPage;
