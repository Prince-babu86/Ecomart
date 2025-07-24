import React, { createContext, useContext, useEffect, useState } from "react";
import ProductsData from "../data/ProductsData";
import fakeUsers from "../data/UsersData";
import { Navigate, useNavigate } from "react-router-dom";

export const DataProvider = createContext();

export const DataContext = ({ children }) => {
  const [isSearchShow, setisSearchShow] = useState(false);
  const [isCartShow, setisCartShow] = useState(false);
  const [reloader, setreloader] = useState(false);
  const [users, setusers] = useState(() => {
    let users = localStorage.getItem("Users");
    return users ? JSON.parse(users) : fakeUsers;
  });

  const [editId, seteditId] = useState(null);

  const [sortBy, setSortBy] = useState("");
  const [category, setCategory] = useState("All");
  const [sortby, setsortby] = useState("")
  const [searchquery, setsearchquery] = useState("");

  const [loggeduser, setloggeduser] = useState(() => {
    const stored = localStorage.getItem("LoggedUser");
    return stored ? JSON.parse(stored) : null;
  });

  // Add to cartfunctions
  const AddToCart = (id) => {
    let product = ProductsData.find((p) => p.id === id);
    let notif = {
      tittle: "Add to cart sucessfully",
      message: product.name,
      id: product.id,
      images: product.images[0],
      createdAt: new Date().toISOString(),
    };
    if (product && loggeduser) {
      const updateduser = {
        ...loggeduser,
        cart: [...(loggeduser.cart || []), product.id],
        notifications: [...(loggeduser.notifications || []), notif],
      };
      setloggeduser(updateduser);
      setusers((prev) =>
        prev.map((u) =>
          u.userId === loggeduser.userId ? { ...u, ...updateduser } : u
        )
      );
    } else navigate("/login");
  };
  console.log(loggeduser);

  // BuyNowFunctions
  const navigate = useNavigate();
  const BuyNowProduct = (id) => {
    setreloader(true);
    setTimeout(() => {
      setreloader(false);
      navigate(`/product/${id}`);
    }, 2000);
  };

  const [popup, setpopup] = useState(null);

  useEffect(() => {
    setpopup(loggeduser?.notifications[loggeduser?.notifications.length - 1]);

    setTimeout(() => {
      setpopup(null);
    }, 3000);
  }, [loggeduser, users]);

  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(users));
    localStorage.setItem("LoggedUser", JSON.stringify(loggeduser));
  }, [users, loggeduser]);

  return (
    <DataProvider.Provider
      value={{
        isSearchShow,
        setisSearchShow,
        isCartShow,
        setisCartShow,
        reloader,
        setreloader,
        users,
        setusers,
        loggeduser,
        setloggeduser,
        editId,
        seteditId,
        category,
        setCategory,
        sortBy,
        setSortBy,
        searchquery,
        setsearchquery,
        AddToCart,
        BuyNowProduct,
        popup,
        setpopup,
        sortby,
         setsortby
      }}
    >
      {children}
    </DataProvider.Provider>
  );
};

export const useData = () => useContext(DataProvider);
