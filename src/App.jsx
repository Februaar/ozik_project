import "./global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hr from "./components/ui/hr";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

import MainPage from "./pages/Main";
import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import ProductPage from "./pages/Product";
import MyPage from "./pages/My";
// import SearchPage from "./pages/Search";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/my/*" element={<MyPage />} />
        {/* <Route path="/search" element={<SearchPage />} /> */}
        <Route path="/product-list/:type" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
      <Hr />
      <Footer />
    </Router>
  );
}

export default App;
