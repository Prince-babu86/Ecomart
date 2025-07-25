import React, { useContext, useEffect, useState } from "react";
import { DataContext, useData } from "../../context/DataContext";
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  BadgeCheck,
  Home,
  Landmark,
  Globe,
  User,
  UserPlus,
  Settings,
  ArrowRight
} from "lucide-react";
import { NavLink } from "react-router-dom";


const MyAccount = () => {
  let { loggeduser, setloggeduser } = useData();

  const [user, setuser] = useState()

  useEffect(()=>{
    setuser(loggeduser)
  },[loggeduser])

  // //(loggeduser);

  return (
   <>
   {user?.address ? <div className="flex-grow bg-[#f8f9fb] text-[#222] p-10 shadow-md">
      <div className="flex items-center gap-6 flex-col sm:flex-row">
        <img
          src={user?.avatar}
          alt="avatar"
          className="w-28 h-28 rounded-full object-cover shadow-md object-top "
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            {user?.name}
            {user?.premium && (
              <BadgeCheck className="text-yellow-500" size={24} />
            )}
          </h2>
          <p className="text-sm text-gray-500 mt-1">Premium Member</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
        <div className="flex items-center gap-3">
          <Mail size={18} /> {user?.email}
        </div>
        <div className="flex items-center gap-3">
          <Phone size={18} /> {user?.phone}
        </div>
        <div className="flex items-center gap-3">
          <Calendar size={18} /> Joined on {user?.createdAt}
        </div>
        <div className="flex items-center gap-3">
          <MapPin size={18} /> {user?.address?.city}
        </div>
        <div className="flex items-center gap-3">
          <User size={18} /> Gender: {user?.gender}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Home className="text-gray-600" size={20} /> Shipping Address
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="flex items-center gap-3">
            <Home size={18} /> {user?.address?.house}
          </div>
          <div className="flex items-center gap-3">
            <Landmark size={18} /> {user?.address?.city}
          </div>
          <div className="flex items-center gap-3">
            <Landmark size={18} /> {user?.address?.state}
          </div>
          <div className="flex items-center gap-3">
            <Globe size={18} /> {user?.address?.country} - {user?.address?.pincode}
          </div>
        </div>
      </div>
    </div> :  <div className="w-full max-w-4xl mx-auto px-4 py-10 flex flex-col items-center justify-center rounded-2xl shadow-xl bg-gradient-to-br from-white to-gray-100 border border-gray-200">
      {/* Icon Group */}
      <div className="flex gap-6 text-yellow-500 mb-6 text-4xl">
        <UserPlus />
        <Settings />
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
        Set Up Your Profile
      </h2>
      <p className="text-gray-500 text-center max-w-md text-sm md:text-base">
        Add your name, address, and contact info to start shopping seamlessly.
      </p>

      {/* Button */}
      <NavLink to={`/profile/edit-profile`} className="mt-6 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg">
        Start Now <ArrowRight size={18} />
      </NavLink>
    </div>}
   </>
  );
};

export default MyAccount;
