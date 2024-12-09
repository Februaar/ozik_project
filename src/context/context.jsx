import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Context 생성
export const DataContext = createContext();

// Provider 컴포넌트
// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    products: [],
    purchased: [],
    best: [],
  });
  const [carouselData, setCarouselData] = useState([]);
  const [loading, setLoading] = useState({
  });

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const endpoints = ["products", "purchased", "best"];
      const res = await Promise.all(
        endpoints.map((endpoint) =>
          axios.get(`https://breezy-equatorial-bag.glitch.me/${endpoint}`)
        )
      );

      setData({
        products: res[0].data,
        purchased: res[1].data,
        best: res[2].data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCarouselData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://breezy-equatorial-bag.glitch.me/carousel"
      );
      setCarouselData(res.data);
    } catch (error) {
      console.error("Error fetching Carousel Data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
    fetchCarouselData();
  }, []);

  return (
    <DataContext.Provider value={{ data, carouselData, loading }}>
      {children}
    </DataContext.Provider>
  );
};
