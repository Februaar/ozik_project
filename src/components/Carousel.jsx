import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/context";
import "../styles/carousel.scss";

export default function Carousel() {
  const { carouselData, loading } = useContext(DataContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [carouselData]);

  if (loading) {
    return <p className="loading">상품 데이터를 불러오는 중입니다.</p>;
  }

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <button onClick={prevSlide}></button>
        {carouselData.map((data, index) => (
          <img
            key={index}
            src={data.image}
            style={{ display: index === currentIndex ? "block" : "none" }}
            alt={`Slide ${index + 1}`}
          />
        ))}
        <button onClick={nextSlide}></button>
      </div>

      <div className="carousel-page">
        <span>
          {currentIndex + 1}/{carouselData.length}
        </span>
      </div>
    </div>
  );
}
