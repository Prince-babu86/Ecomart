import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Swiper from "./components/Swiper";
import MainRoutes from "./routes/MainRoutes";
import Search from "./components/Search";
import { useData } from "./context/DataContext";
import Cart from "./components/Cart";
import { useLocation } from "react-router-dom";
import Reloader from "./components/Reloader";
import Footer from "./components/Footer";
import MenuBar from "./components/Menubar";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import gsap from "gsap";
import PopUp from "./components/PopUp";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const appContentRef = useRef(null);

  const isShow =
    location.pathname === "/login" || location.pathname === "/signup";

  const { isSearchShow, isCartShow, reloader , popup , setpopup } = useData();

  // Loader for 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      if (appContentRef.current) {
        gsap.fromTo(
          appContentRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div
      ref={appContentRef}
      className={`min-h-screen app_main_page w-full bg-[#efefef] ${
        isShow ? "p-0" : "p-3.5"
      }`}
    >
      <ScrollToTop />
      {reloader && <Reloader />}
      {!isShow && <Navbar />}
      {!isShow && <MenuBar />}
      {isCartShow && <Cart />}
      {isSearchShow && <Search />}
      {popup && <PopUp popup={popup}/>}

      <div className={`${isShow ? "mt-0" : "mt-20"}`}>
        <MainRoutes />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
