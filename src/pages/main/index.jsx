import "../../styles/main.scss";
import "../../styles/product.scss";

import MainHeader from "../../components/MainHeader";
import MainCarousel from "../../components/MainCarousel";
import MainTab from "../../components/MainTab";

function MainPage() {
  return (
    <>
      <MainHeader />
      <MainCarousel />
      <MainTab />
    </>
  );
}

export default MainPage;
