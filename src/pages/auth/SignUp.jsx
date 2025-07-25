import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { nanoid } from "nanoid";
import "../../style/App.css";
import { motion } from "framer-motion";
import "../../style/Tablet.css";

const SignUp = () => {
  let {
    users,
    setusers,
    loggeduser,
    setloggeduser,
    reloader,
    setreloader,
    popup,
    setpopup,
  } = useData();

  const [formdata, setformdata] = useState({
    userId: nanoid(),
    name: "",
    email: "",
    password: "",
    cart: [],
    cards: [],
    wishlist: [],
    orders: [],
    notifications: [],
    premium: null,
    searchHistory: [],
    createdAt: new Date().toISOString(),
  });

  const [loader, setloader] = useState(false);
  const navigate = useNavigate();

  const handleOnChnage = (e) => {
    let { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      formdata.email.length > 4 &&
      formdata.name.length > 4 &&
      formdata.password.length > 4
    ) {
      setloader(true);
      setTimeout(() => {
        setloader(false);
        setloggeduser(formdata);
        setusers((prev) => [...prev, formdata]);
        setreloader(true);
        setTimeout(() => {
          setreloader(false);
          navigate("/");
          setpopup({ tittle: "User Account Created Sucessfully" });
        }, 1000);
        setpopup(null);
      }, 3000);
    } else {
      setpopup({ tittle: "Please enter full data" });
      return;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="signup_full_page w-full min-h-screen flex items-center justify-center px-4 py-10 bg-white"
    >
      <form
        onSubmit={handleOnSubmit}
        className="signpage_form_page w-full max-w-md bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-5 font-sans text-center">
          Create Your Account
        </h1>

        <div className="login_methods flex items-center gap-2 mb-6">
          <div className="flex items-center group justify-center h-9 w-9 rounded-full border border-gray-300 cursor-pointer hover:bg-blue-50">
            <i className="ri-facebook-fill text-gray-600 group-hover:text-blue-600"></i>
          </div>
          <div className="flex items-center group justify-center h-9 w-9 rounded-full border border-gray-300 cursor-pointer hover:bg-red-50">
            <i className="ri-google-fill text-gray-600 group-hover:text-red-500"></i>
          </div>
          <div className="flex items-center group justify-center h-9 w-9 rounded-full border border-gray-300 cursor-pointer hover:bg-blue-100">
            <i className="ri-linkedin-fill text-gray-600 group-hover:text-blue-700"></i>
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center mb-6 font-sans">
          Welcome! Create your account to get started with us. Whether you're an
          influencer, startup, or brand enthusiast, unlock powerful tools and
          personalized experiences.
        </p>

        <div className="sign_form_data flex flex-col items-start w-full gap-4">
          <div className="w-full border-b border-gray-300">
            <input
              onChange={handleOnChnage}
              value={formdata.name}
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full py-3 px-1 outline-none text-sm font-sans placeholder:text-gray-400 bg-transparent"
            />
          </div>

          <div className="w-full border-b border-gray-300">
            <input
              onChange={handleOnChnage}
              value={formdata.email}
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full py-3 px-1 outline-none text-sm font-sans placeholder:text-gray-400 bg-transparent"
            />
          </div>

          <div className="w-full border-b border-gray-300">
            <input
              onChange={handleOnChnage}
              value={formdata.password}
              name="password"
              type="password"
              placeholder="Password"
              className="w-full py-3 px-1 outline-none text-sm font-sans placeholder:text-gray-400 bg-transparent"
            />
          </div>

          <p className="text-[11px] text-gray-400 mt-2">
            Your data is secure with us. By signing up, you agree to our terms.
          </p>

          {!loader ? (
            <button
              type="submit"
              className="w-full mt-6 bg-black text-white py-3 rounded-md text-sm font-semibold tracking-wide hover:bg-neutral-900 transition duration-200"
            >
              Sign up
            </button>
          ) : (
            <div className="w-full mt-6 bg-black text-white py-3 rounded-md flex items-center justify-center">
              <span className="h-4 w-4 rounded-full border-2 border-t-transparent animate-spin"></span>
            </div>
          )}

          <h4 className="w-full text-center mt-6 text-xs font-sans">
            Already have an account?{" "}
            <Link className="text-blue-500 font-semibold" to={`/login`}>
              Log in
            </Link>
          </h4>
        </div>
      </form>
    </motion.div>
  );
};

export default SignUp;
