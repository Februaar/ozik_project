import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/Main";
import SearchPage from "./pages/Search";
import ProductPage from "./pages/Product";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
