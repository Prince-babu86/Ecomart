import React from "react";
import {
  ShoppingBag,
  Heart,
  User,
  Star,
  LogOut,
  Settings,
  PenIcon,
  Bell,
  CardSim,
  Plus,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const { loggeduser, setloggeduser, editId, seteditId } = useData();

  // Helper to return active/inactive class names
  const getClassName = ({ isActive }) =>
    `profilemenu_active_items flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer group ${
      isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
    }`;

  return (
    <div className="w-[260px] profile_menu_page fixed min-h-screen bg-white border-r border-gray-200 shadow-sm p-6 flex flex-col justify-between">
      <div>
        <ul className="space-y-2 text-gray-700">
          <NavLink to="/" end className={getClassName}>
            <ShoppingBag
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="font-medium profile_menu_head">Shop</span>
          </NavLink>

          <NavLink to="/orders" end className={getClassName}>
            <Heart
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="font-medium profile_menu_head">Wishlist</span>
          </NavLink>

          <NavLink to="/profile" end className={getClassName}>
            <User
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="font-medium profile_menu_head">Account</span>
          </NavLink>

          <NavLink to="/profile/premium" end className={getClassName}>
            <Star
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="font-medium profile_menu_head">Premium</span>
          </NavLink>

          <NavLink to="/profile/edit-profile" end className={getClassName}>
            <PenIcon
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="font-medium profile_menu_head">Edit Profile</span>
          </NavLink>

          <NavLink to="/notifications" end className={getClassName}>
            <Bell
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="font-medium profile_menu_head">Notifications</span>
          </NavLink>

          <NavLink to="/profile/cards" end className={getClassName}>
            <ShoppingBag
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="font-medium profile_menu_head">Cards</span>
          </NavLink>

          <NavLink to="/profile/create-cards" end className={getClassName}>
            <Plus
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="font-medium profile_menu_head">Create card</span>
          </NavLink>

          <div style={{padding:"12px",display:"flex",alignItems:"center" , gap:"15px"}}   onClick={()=>setloggeduser(null)}  className={getClassName}>
            <LogOut
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <span className="font-medium profile_menu_head">Logout</span>
          </div>
        </ul>
      </div>

      <div className="text-xs text-gray-400 text-center pt-6 border-t">
        © 2025 EcoMart
      </div>
    </div>
  );
};

export default ProfileMenu;
