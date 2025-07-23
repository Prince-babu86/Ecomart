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
} from "lucide-react";


const MyAccount = () => {
  let { loggeduser, setloggeduser } = useData();

  const [user, setuser] = useState()

  useEffect(()=>{
    setuser(loggeduser)
  })

  // console.log(loggeduser);

  return (
    <div className="flex-grow bg-white p-10 shadow-md">
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
    </div>
  );
};

export default MyAccount;
