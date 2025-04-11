import { Routes, Route, Outlet } from "react-router";
import Header from "./components/header/header";
import HeroSection from "./components/hero-section/hero-section";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about/about";
import PleasurePage from "./pages/pleasure/pleasure";

import ProductDetailPage from "../src/components/productDetailPage/productDetailPage";

import "./app.scss";

const Layout = ({ title, page }) => (
  <>
    <HeroSection title={title} page={page} />
    <Outlet />
  </>
);

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Layout title="" page="home" />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route
          path="about"
          element={<Layout title="Our Coffee" page="about" />}
        >
          <Route index element={<AboutPage />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
        </Route>

        <Route
          path="pleasure"
          element={<Layout title="For Your Pleasure" page="pleasure" />}
        >
          <Route index element={<PleasurePage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
