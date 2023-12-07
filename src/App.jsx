import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import MainPage from "./pages/main";
import SignUpPage from "./pages/signup";
import SignInPage from "./pages/signin";
import MyPage from "./pages/my";
import SearchPage from "./pages/search";
import ProductPage from "./pages/product";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/*" element={<MainPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/my/*" element={<MyPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
