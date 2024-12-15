import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    products: [],
    purchased: [],
    best: [],
  });
  const [carouselData, setCarouselData] = useState([]);
  const [purchasedData, setPurchasedData] = useState([]);
  const [loading, setLoading] = useState({});

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

  const fetchPurchasedData = async () => {
    try {
      const res = await axios.get(
        "https://breezy-equatorial-bag.glitch.me/purchases"
      );
      setPurchasedData(res.data);
    } catch (err) {
      console.error("Error fetching product:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
    fetchCarouselData();
    fetchPurchasedData();
  }, []);

  return (
    <DataContext.Provider
      value={{ data, carouselData, purchasedData, loading }}
    >
      {children}
    </DataContext.Provider>
  );
};
