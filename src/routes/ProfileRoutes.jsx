import React from "react";
import { Route, Routes } from "react-router-dom";
import MyAccount from "../components/profile/MyAccount";
import EditProfile from "../components/profile/EditProfile";
import Premium from "../components/profile/Premium";

import Cards from "../components/profile/Cards";
import CreateCard from "../components/profile/CreateCard";


const ProfileRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MyAccount />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/premium" element={<Premium />} />
        
        <Route path="/cards" element={<Cards />} />
     
       <Route path="/create-cards" element={<CreateCard />} />
      </Routes>
    </>
  );
};

export default ProfileRoutes;
