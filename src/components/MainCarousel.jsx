import { chevronLeft, chevronRight } from "../img/index";

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MainCarousel() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const res = await axios.get("https://breezy-equatorial-bag.glitch.me/carousel");
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
    }, 5000);

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
    const selectedItem = items[currentIndex];
    console.log(selectedItem);
    navigate(`/product-list/${selectedItem.type}`, {
      state: { product: selectedItem },
    });
  };

  return (
    <div className="main-carousel-container">
      <button onClick={handlePrev}>
        <img src={chevronLeft} />
      </button>
      <div className="carousel-box">
        {items.length > 0 ? (
          <>
            <img
              src={items[currentIndex].image}
              alt={items[currentIndex].name}
              className="item-img"
            />
            <button onClick={handleGoToDetail} className="item-button">
              {items[currentIndex].type} 구경하기
            </button>
          </>
        ) : (
          <p className="loading">상품 데이터를 불러오는 중입니다.</p>
        )}
      </div>
      <button onClick={handleNext}>
        <img src={chevronRight} />
      </button>
    </div>
  );
}

export default MainCarousel;
