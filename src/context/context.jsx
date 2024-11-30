import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Context 생성
export const DataContext = createContext();

// Provider 컴포넌트
export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    products: [],
    purchased: [],
    best: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const endpoints = ["products", "purchased", "best"];
      const responses = await Promise.all(
        endpoints.map((endpoint) =>
          axios.get(`https://breezy-equatorial-bag.glitch.me/${endpoint}`)
        )
      );
      console.log(responses);

      const fetchedData = {
        products: responses[0].data,
        purchased: responses[1].data,
        best: responses[2].data,
      };

      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData(); // 초기 데이터 로드
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};
