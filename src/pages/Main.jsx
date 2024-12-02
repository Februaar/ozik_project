import "../styles/main.scss";
import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel";

function MainPage() {
  return (
    <div className="main-container">
      <Carousel />
      <Navigation />
    </div>
  );
}

export default MainPage;
