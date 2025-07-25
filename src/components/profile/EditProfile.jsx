import React, { useEffect, useState } from "react";
import { UploadCloud, Save } from "lucide-react";
import { useData } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();

  let {
    loggeduser,
    setloggeduser,
    users,
    setusers,
    reloader,
    setreloader,
  } = useData();
  const [form, setForm] = useState({
    name: loggeduser?.name,
    email: loggeduser?.email,
    phone: loggeduser?.phone,
    gender: "Male",
    avatar: loggeduser?.avatar
      ? loggeduser.avatar
      : "https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg",
    address: {
      house: loggeduser?.address?.house,
      city: loggeduser?.address?.city,
      state: loggeduser?.address?.state,
      country: loggeduser?.address?.country,
      pincode: loggeduser?.address?.pincode,
    },
  });


  const [loader, setloader] = useState(false);

  const handleOnchange = (e) => {
    let { name, value } = e.target;

    if (["house", "city", "state", "country", "pincode"].includes(name)) {
      setForm((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAvatarChange = (e) => {
    const imageUrl = prompt("Enter image URL");
    if (imageUrl) {
      setForm({ ...form, avatar: imageUrl });
    }
  };

  const handleEdituser = (e) => {
    e.preventDefault();
    // seteditId(loggeduser.userId);
    setloader(true);

    setTimeout(() => {
      const notif = {
        id: Date.now(),
        message: "Your profile was updated successfully",
        tittle: "Profile Updated sucessfully",
        createdAt: new Date().toISOString(),
      };

      let updateduser = {
        ...loggeduser,
        ...form,
        notifications: [...(loggeduser.notifications || []), notif],
      };
      console.log(updateduser);
      setloggeduser(updateduser);
      setusers((prev) =>
        prev.map((u) =>
          u.userId === updateduser.userId
            ? {
                ...u,
                ...updateduser,
                notifications: [...(u.notifications || []), notif],
              }
            : u
        )
      );
      setloader(false);
      setreloader(true);

      setTimeout(() => {
        setreloader(false);
        navigate(-1);
      }, 1000);
    }, 3000);
  };

 

  return (
    <div className="flex-grow bg-[#f8f9fb] text-[#222] p-10 pb-32 shadow-md ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>
      <form onSubmit={handleEdituser} className="space-y-6">
        <div className="flex items-center gap-6">
          <img
            src={form.avatar}
            alt="avatar"
            className="w-28 h-28 rounded-full object-cover object-top shadow-md"
          />
          <button
            type="button"
            onClick={handleAvatarChange}
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <UploadCloud size={20} /> Change Photo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            onChange={handleOnchange}
            value={form.name}
            type="text"
            name="name"
            placeholder="Full Name"
            className="border border-gray-300 p-3 rounded-md w-full"
          />
          <input
            onChange={handleOnchange}
            value={form.email}
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-300 p-3 rounded-md w-full"
          />
          <input
            onChange={handleOnchange}
            value={form.phone}
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="border border-gray-300 p-3 rounded-md w-full"
          />
          <select
            onChange={handleOnchange}
            value={form.gender}
            name="gender"
            className="border border-gray-300 p-3 rounded-md w-full"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-4">
            Address
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              onChange={handleOnchange}
              value={form.address.house}
              type="text"
              name="house"
              placeholder="House / Street"
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            <input
              onChange={handleOnchange}
              value={form.address.city}
              type="text"
              name="city"
              placeholder="City"
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            <input
              onChange={handleOnchange}
              value={form.address.state}
              type="text"
              name="state"
              placeholder="State"
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            <input
              onChange={handleOnchange}
              value={form.address.country}
              type="text"
              name="country"
              placeholder="Country"
              className="border border-gray-300 p-3 rounded-md w-full"
            />
            <input
              onChange={handleOnchange}
              value={form.address.pincode}
              type="text"
              name="pincode"
              placeholder="Pincode"
              className="border border-gray-300 p-3 rounded-md w-full"
            />
          </div>
        </div>

        {!loader ? (
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md"
          >
            <Save size={18} /> Save Changes
          </button>
        ) : (
          <div className="flex items-center gap-2  justify-center  w-40 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-md shadow-md">
            <span className="h-5 w-5 rounded-full border-2 border-t-transparent animate-spin"></span>
          </div>
        )}
      </form>
    </div>
  );
};

export default EditProfile;
