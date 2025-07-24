import React from "react";
import {
  ShoppingBag,
  Heart,
  User,
  Star,
  LogOut,
  PenIcon,
  Bell,
  Plus,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { to: "/", icon: ShoppingBag, label: "Shop" },
  { to: "/orders", icon: Heart, label: "Wishlist" },
  { to: "/profile", icon: User, label: "Account" },
  { to: "/profile/premium", icon: Star, label: "Premium" },
  { to: "/profile/edit-profile", icon: PenIcon, label: "Edit" },
  { to: "/notifications", icon: Bell, label: "Notifications" },
  { to: "/profile/cards", icon: ShoppingBag, label: "Cards" },
  { to: "/profile/create-cards", icon: Plus, label: "Add Card" },
  { to: "/logout", icon: LogOut, label: "Logout" },
];

const getClassName = ({ isActive }) =>
  `w-12 h-12 flex items-center justify-center rounded-xl transition-all ${
    isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100 text-gray-600"
  }`;

const IconOnlyDraggableMenu = () => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={{ top: -500, bottom: 500, left: -200, right: 200 }}
      className="fixed top-24 left-4 bg-white rounded-2xl shadow-xl border border-gray-200 p-3 flex flex-col gap-3 z-[2000] cursor-grab active:cursor-grabbing"
    >
      {navItems.map(({ to, icon: Icon }) => (
        <NavLink key={to} to={to} className={getClassName}>
          <Icon size={22} />
        </NavLink>
      ))}
    </motion.div>
  );
};

export default IconOnlyDraggableMenu;
