import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { nanoid } from "nanoid";
import  '../../style/App.css'
import  '../../style/Tablet.css'


const SignUp = () => {
  //  useEffect(() => {
  //    gsap.from(".signup_image" , {
  //     x:500,
  //     duration:1.2,
  //     opacity:0,
  //      ease: "power3.out",
  //   })

  //    gsap.from(".signpage_form_page" , {
  //     x:-1700,
  //     delay:0.4,
  //     duration:1.5,
  //     opacity:0,
  //      ease: "power3.out",
  //   })
  //  },[])

  let { users, setusers, loggeduser, setloggeduser, reloader, setreloader } =
    useData();

  const [formdata, setformdata] = useState({
    userId:nanoid(),
    name: "",
    email: "",
    password: "",
    cart: [],
    cards:[],
    wishlist: [],
    orders: [],
    notifications:[],
    premium:null,
    searchHistory:[],
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
        setloggeduser(formdata)
        setusers((prev) => [...prev, formdata]);
        setreloader(true)
        setTimeout(() => {
          setreloader(false)
          navigate("/")
        }, 1000);
      }, 3000);
    } else {
      return;
    }
  };

  return (
    <div className="signup_full_page w-full h-screen flex items-center justify-center overflow-x-hidden ">
      <div className="sign_page rounded-xl w-full flex">
        <div className="signup_image w-[100%] h-screen object-cover ">
          <img
            className="h-full w-full object-cover rounded-tr-md rounded-br-md"
            src="https://i.pinimg.com/1200x/f8/6f/29/f86f29fa88a0ea9f551dad38953b3a80.jpg"
            alt=""
          />
        </div>
        <form
          onSubmit={handleOnSubmit}
          className="signpage_form_page w-[450px] absolute left-5 mt-4 rounded-2xl bg-[#FAFAFA] p-8 flex items-center justify-center flex-col"
          action=""
        >
          <h1 className="sign_create_account text-4xl font-semibold font-mono text-[#333] ">
            Create Account
          </h1>
          <div className="login_methods flex items-center gap-2 mt-6">
            <div className="flex items-center group justify-center h-8 w-8 rounded-full border-1 border-gray-500 cursor-pointer hover:bg-slate-200 hover:border-none">
              <i className="ri-facebook-fill text-gray-700 group-hover:text-blue-500"></i>
            </div>
            <div className="flex items-center justify-center h-8 w-8 rounded-full border-1 border-gray-500 cursor-pointer">
              <i className="ri-google-fill text-gray-700"></i>
            </div>
            <div className="flex items-center justify-center h-8 w-8 rounded-full border-1 border-gray-500 cursor-pointer">
              <i className="ri-linkedin-fill text-gray-700"></i>
            </div>
          </div>
          <p className="sign_up_query sign_up_query1 text-[12px] font-semibold font-sans mt-4 text-gray-500 w-full text-center ">
            Welcome! Create your account to get started with us. Whether you're
            an influencer, startup, or brand enthusiast, joining our platform
            unlocks access to powerful tools, personalized experiences, and
            exciting opportunities. Just enter your details below to set up your
            profile — it’s quick, easy, and secure. Let’s build something
            amazing together!
          </p>

          <div className="sign_form_data flex flex-col items-start w-full px-5 gap-2 ">
            <div className="signup_form_item flex flex-col items-start w-full gap-1.5 relative">
              <label className="text-sm text-[#333] font-semibold font-sans px-2">
                Name
              </label>
              <div className="flex items-center w-full bg-[#efefef] gap-2 px-3 rounded-md py-1 ">
                <i className="ri-user-fill text-md"></i>
                <input
                  onChange={handleOnChnage}
                  value={formdata.name}
                  name="name"
                  type="text"
                  placeholder="Enter name here..."
                  className="w-full outline-none text-sm font-mono py-2 px-0.5  rounded-md"
                />
              </div>
            </div>

            <div className="signup_form_item flex flex-col items-start w-full gap-1.5 relative">
              <label className="text-sm text-[#333] font-semibold font-sans px-2">
                Email
              </label>
              <div className="flex items-center w-full bg-[#efefef] gap-2 px-3 rounded-md py-1 ">
                <i className="ri-mail-fill text-md"></i>
                <input
                  onChange={handleOnChnage}
                  value={formdata.email}
                  name="email"
                  type="text"
                  placeholder="Enter email here..."
                  className="w-full outline-none text-sm font-mono py-2 px-0.5  rounded-md"
                />
              </div>
            </div>

            <div className="signup_form_item flex flex-col items-start w-full gap-1.5 relative">
              <label className="text-sm text-[#333] font-semibold font-sans px-2">
                Password
              </label>
              <div className="flex items-center w-full bg-[#efefef] gap-2 px-3 rounded-md py-1 ">
                <i className="ri-lock-password-fill text-md"></i>
                <input
                  onChange={handleOnChnage}
                  value={formdata.password}
                  name="password"
                  type="password"
                  placeholder="Enter password here..."
                  className="w-full outline-none text-sm font-mono py-2 px-0.5  rounded-md"
                />
              </div>
            </div>

            <p className="sign_up_query w-full text-[12px] text-gray-500 mt-4">
              We value your privacy. Any data you provide is stored securely and
              used only to improve your experience on our platform. We do not
              share your personal information with third parties without your
              consent. By creating an account, you agree to our terms and
              practices.
            </p>

            <div className="signup_form_buttons flex items-center justify-between w-full mt-5">
              <button
                type="reset"
                className="w-40 bg-red-600 px-10 py-2 text-white rounded-md cursor-pointer uppercase hover:bg-red-500"
              >
                Cancel
              </button>
              {!loader ? (
                <button
                  type="submit"
                  className="w-40 bg-[#000] px-10 py-2 text-white rounded-md uppercase cursor-pointer hover:bg-[#111]"
                >
                  Sign up
                </button>
              ) : (
                <div className="w-40 bg-[#000] px-10 py-3 text-white rounded-md uppercase cursor-pointer hover:bg-[#111] flex items-center justify-center">
                  <span className="h-4 w-4 rounded-full border-2 border-t-transparent animate-spin"></span>
                </div>
              )}
            </div>

            <h4 className="w-full text-center mt-7 text-xs font-sans font-semibold">
              Already have an account?{" "}
              <Link className="text-blue-500 font-mono" to={`/login`}>
                Log in
              </Link>{" "}
              to continue your journey with us.
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
