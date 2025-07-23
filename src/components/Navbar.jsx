import React from "react";
import { useData } from "../context/DataContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {
    isSearchShow,
    setisSearchShow,
    isCartShow,
    setisCartShow,
    loggeduser,
  } = useData();

  const handleIsSearchShow = () => {
    if (!isSearchShow) {
      setisSearchShow(true);
    }
  };

  const hanldeCardShow = () => {
    if (!isCartShow) {
      setisCartShow(true);
    }
  };

  return (
    <nav className="navbar w-[98%] fixed z-[1000] top-3 left-3 flex items-center justify-between bg-[#fffdf8] border border-[#f0e7dd] shadow-lg py-3.5 px-7 rounded-md backdrop-blur-md transition-all">
      {/* Left: Logo */}
      <div className="nav_left">
        <NavLink
          to="/"
          className="flex font-[Urbanist] items-center gap-2 text-[#101010] font-bold text-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-emerald-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9"
            />
          </svg>
          <span className="text-[#181818]">Ecomart</span>
        </NavLink>
      </div>

      {/* Center: Navigation Links */}
      <div className="nav_center flex items-center gap-6 text-sm font-semibold font-mono text-[#222]">
        {["Home", "Products", "About", "Contact"].map((label) => (
          <NavLink
            key={label}
            to={`/${label === "Home" ? "" : label.toLowerCase()}`}
            className={({ isActive }) =>
              `hover:text-[#fac400] transition-all duration-300 ease-in-out ${
                isActive
                  ? "text-[#fac400] border-b-2 border-[#fac400]"
                  : "text-[#3b3b3b]"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Right: Icons */}
      <div className="nav_right flex items-center gap-3 text-[#222]">
        <div
          onClick={handleIsSearchShow}
          className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-[#ffe4cc] transition"
        >
          <i className="ri-search-line text-[20px]"></i>
        </div>
        <NavLink
          to={loggeduser ? "/profile" : "/login"}
          className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-[#ffe4cc] transition"
        >
          <i className="ri-user-3-line text-[20px]"></i>
        </NavLink>
        <NavLink to={`/orders`} className="relative h-9 w-9 flex items-center justify-center rounded-full hover:bg-[#ffe4cc] transition">
          <div className="h-4 w-4 rounded-full bg-[#ffc700] absolute top-[0] right-[-2px] text-[10px] font-bold text-black flex items-center justify-center shadow-md">
           {loggeduser?.orders.length}
          </div>
          <i className="ri-archive-fill text-[20px]"></i>
        </NavLink>
        <div
          onClick={hanldeCardShow}
          className="relative h-9 w-9 flex items-center justify-center rounded-full hover:bg-[#ffe4cc] transition"
        >
          <div className="h-4 w-4 rounded-full bg-[#ffc700] absolute top-[0] right-[-2px] text-[10px] font-bold text-black flex items-center justify-center shadow-md">
            {loggeduser?.cart?.length || 0}
          </div>
          <i className="ri-shopping-cart-2-line text-[20px]"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
