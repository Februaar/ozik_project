import axios from "axios";
import { useState, useEffect } from "react";

function MainCarousel() {
  const [items, setItems] = useState([]);
  const [currCarousel, setCurrCarousel] = useState(1);
  const [carouselTransition, setCarouselTransition] = useState(
    "transform 500ms ease-in-out"
  );
  console.log(items);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const res = await axios.get("http://localhost:4001/carousel");
        setItems(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchCarouselData();
  }, []);

  return (
    <div className="main-car-container">
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} className="main-car-img" />
          <span>{item.brand}</span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default MainCarousel;

{
  /* {!loading ? (
  items.map((item) => (
    <div key={item.id}>
      <div className="main-car-container">
        <img src={item.image} className="main-car-img" />
      </div>
      <span>{item.brand}</span>
      <span>{item.name}</span>
    </div>
  ))
) : (
  <span>상품 데이터를 불러오는 중입니다.</span>
)} */
}
