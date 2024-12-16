import "../styles/main.scss";
import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel";

export default function MainPage() {

  return (
    <div className="main-container">
      <Carousel />
      <Navigation />
    </div>
  );
}
