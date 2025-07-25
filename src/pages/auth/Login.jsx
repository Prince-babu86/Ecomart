import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { motion } from "framer-motion";
import "../../style/App.css";
import "../../style/Tablet.css";

const Login = () => {
  const [formdata, setformdata] = useState({ email: "", password: "" });
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  const { users, setloggeduser, setreloader, setpopup } = useData();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formdata;

    if (email.length > 4 && password.length > 4) {
      const user = users.find((u) => u.email === email);
      if (user && user.password === password) {
        setloader(true);
        setTimeout(() => {
          setloader(false);
          setloggeduser(user);
          setreloader(true);
          setTimeout(() => {
            navigate("/");
            setreloader(false);
            setpopup({ tittle: "User Logged in successfully" });
          }, 1000);
        }, 2000);
      } else {
        setpopup({ tittle: "User not found" });
        setTimeout(() => {
          setformdata({ email: "", password: "" });
          setpopup(null);
        }, 2000);
      }
    } else {
      setpopup({ tittle: "Please enter full data" });
      setTimeout(() => setpopup(null), 3000);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="sign_page w-full flex items-center justify-center"
      >
        <form
          onSubmit={handleOnSubmit}
          className="signpage_form_page w-[90%] max-w-[420px] bg-white p-8 rounded-xl shadow-md flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl font-semibold font-mono text-gray-800 mb-3">
            Login Account
          </h1>

          <div className="login_methods flex items-center gap-2 mt-2 mb-4">
            <div className="flex items-center group justify-center h-8 w-8 rounded-full border border-gray-300 cursor-pointer hover:bg-gray-100">
              <i className="ri-facebook-fill text-gray-600 group-hover:text-blue-500"></i>
            </div>
            <div className="flex items-center justify-center h-8 w-8 rounded-full border border-gray-300 cursor-pointer hover:bg-gray-100">
              <i className="ri-google-fill text-gray-600"></i>
            </div>
            <div className="flex items-center justify-center h-8 w-8 rounded-full border border-gray-300 cursor-pointer hover:bg-gray-100">
              <i className="ri-linkedin-fill text-gray-600"></i>
            </div>
          </div>

          <p className="sign_up_query text-[13px] font-medium text-gray-500 text-center mb-6">
            Enter your credentials to continue
          </p>

          <div className="sign_form_data flex flex-col items-start w-full px-4 gap-4">
            <div className="signup_form_item flex flex-col items-start w-full gap-1 relative">
              <label className="text-sm text-gray-600 font-semibold px-1">
                Email
              </label>
              <input
                name="email"
                type="text"
                value={formdata.email}
                onChange={handleOnChange}
                placeholder="you@example.com"
                className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none text-sm py-2 transition-all"
              />
            </div>

            <div className="signup_form_item flex flex-col items-start w-full gap-1 relative">
              <label className="text-sm text-gray-600 font-semibold px-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={formdata.password}
                onChange={handleOnChange}
                placeholder="••••••••"
                className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none text-sm py-2 transition-all"
              />
            </div>
          </div>

          <div className="signup_form_buttons w-full mt-6 px-4">
            {!loader ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md uppercase text-sm hover:bg-gray-800 transition"
              >
                Login
              </button>
            ) : (
              <div className="w-full bg-black py-2 text-white rounded-md flex items-center justify-center">
                <span className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
              </div>
            )}
          </div>

          <h4 className="text-center mt-6 text-xs text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </h4>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
