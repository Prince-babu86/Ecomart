import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  ShoppingCart,
  User,
  PackageCheck,
  Receipt, // ✅ Add this line
} from "lucide-react";

const BottomMobileMenu = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-[0_-1px_10px_rgba(0,0,0,0.05)] z-[2000] md:hidden">
      <div className="flex justify-between px-6 py-2">
        <NavItem to="/" label="Home" icon={<Home size={22} />} />
        <NavItem to="/products" label="Products" icon={<PackageCheck size={22} />} />
        <NavItem to="/orders" label="Orders" icon={<Receipt size={22} />} /> {/* ✅ New Orders tab */}
        <NavItem to="/cart" label="Cart" icon={<ShoppingCart size={22} />} />
        <NavItem to="/profile" label="Profile" icon={<User size={22} />} />
      </div>
    </div>
  );
};

const NavItem = ({ to, label, icon }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `flex flex-col items-center justify-center transition-all duration-200 ${
        isActive ? "text-blue-600 font-semibold" : "text-gray-600"
      }`
    }
  >
    <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 active:scale-95">
      {icon}
    </div>
    <span className="text-xs mt-1">{label}</span>
  </NavLink>
);

export default BottomMobileMenu;
