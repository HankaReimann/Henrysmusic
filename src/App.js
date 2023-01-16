import logo from "./logo.svg";
import "./App.css";
import BlogPage from "../src/components/BlogPage";
import Home from "../src/components/HomePage";
import Article from "./components/Artical"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category_Detail from "../src/components/Cetogry"
import ProductDetail from "../src/components/productDetail"

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article" element={<Article />} />
        <Route path="/category" element={<Category_Detail />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
