import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import MainPage from "./pages/Main";
import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import MyPage from "./pages/My";
import SearchPage from "./pages/Search";
import ProductPage from "./pages/Product";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
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
