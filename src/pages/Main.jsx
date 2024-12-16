import "../styles/main.scss";
import Navigation from "../components/main/Navigation";
import Carousel from "../components/main/Carousel";

export default function MainPage() {

  return (
    <div className="main-container">
      <Carousel />
      <Navigation />
    </div>
  );
}
