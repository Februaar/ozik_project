import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMenu } from "./context/MenuContext";
import "./global.css";
import "./App.css";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Hr from "./components/ui/hr";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import PrivateRoute from "./components/PrivateRoute";

import MainPage from "./pages/Main";
import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import ProductPage from "./pages/Product";
import MyPage from "./pages/My";
// import SearchPage from "./pages/Search";

function App() {
  const { menuOpen } = useMenu();

  return (
    <Router>
      <Header />
      {menuOpen && <MenuBar />}
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route
          path="/my/*"
          element={
            <PrivateRoute>
              <MyPage />
            </PrivateRoute>
          }
        />
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
