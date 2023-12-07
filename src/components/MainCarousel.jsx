import { chevronLeft, chevronRight } from "../img/index";

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MainCarousel() {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const navigate = useNavigate();

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 80000);

    return () => clearInterval(intervalId);
  }, [items]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleGoToDetail = () => {
    navigate(`/product/${items[currentIndex].id}`);
  };

  return (
    <div className="main-carousel-container">
      <button onClick={handlePrev} className="click-button">
        <img src={chevronLeft} />
      </button>
      <div className="carousel-box">
        {items.length > 0 ? (
          <>
            <img
              src={items[currentIndex].image}
              alt={items[currentIndex].name}
              className="img"
            />
            <div className="recommend">
              <span className="brand">{items[currentIndex].brand}</span>
              <span className="name">{items[currentIndex].name}</span>
            </div>
            <button onClick={handleGoToDetail} className="button">
              구경하기
            </button>
          </>
        ) : (
          <span>상품 데이터를 불러오는 중입니다.</span>
        )}
      </div>
      {/* {items.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} className="main-car-img" />
        </div>
      ))} */}
      <button onClick={handleNext} className="click-button">
        <img src={chevronRight} />
      </button>
    </div>
  );
}

export default MainCarousel;
