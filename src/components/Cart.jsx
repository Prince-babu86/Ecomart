import { useGSAP } from "@gsap/react";
import React from "react";
import { useData } from "../context/DataContext";
import gsap from "gsap";
import EmptyCart from "../components/EmptyCart";
import ProductsData from "../data/ProductsData";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  let {
    isCartShow,
    setisCartShow,
    loggeduser,
    setloggeduser,
    users,
    setusers,
    BuyNowProduct,
  } = useData();
  //(loggeduser);

  const navigate = useNavigate();

  const handleHideCart = () => {
    if (isCartShow) {
      // navigate("/");
      setisCartShow(false);
    } else {
      // navigate("/");
    }
  };

  const RemoveCartItem = (Productid) => {
   let image = ProductsData.find((p)=>p.id === Productid).images[0]
  //  //(image);
    let notif = {
      tittle: "Product Remove sucessfully",
      message: `Your product remove sucessfully with id of ${Productid} from your cart`,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      images:image
    };
    setloggeduser((prev) => ({
      ...prev,
      cart: prev.cart.filter((id) => id !== Productid),
      notifications: [...(loggeduser.notifications || []), notif],
    }));

    setusers((prev) =>
      prev.map((u) =>
        u.userId === loggeduser.userId
          ? {
              ...loggeduser,
              notifications: [...(loggeduser.notifications || []), notif],
            }
          : u
      )
    );
  };

  let renderCarts = ProductsData.filter((p) => loggeduser?.cart.includes(p.id));
  //(renderCarts);

  return (
    <div
      className={`cart_page_1 fixed top-0 right-0   h-screen w-[800px]  bg-white z-[2005] p-5`}
    >
      <div className="cart_top flex items-center justify-between border-b-2 pb-3">
        <h2 className="text-xl font-mono">
          Shopping Cart ({loggeduser?.cart.length})
        </h2>
        <i
          onClick={handleHideCart}
          className="ri-close-fill text-3xl cursor-pointer"
        ></i>
      </div>
      {loggeduser?.cart.length > 0 ? (
        <div className="carts_products w-full mt-5 pb-28 flex flex-col gap-2 px-2 overflow-y-auto h-screen ">
          {renderCarts.reverse().map((p, id) => {
            return (
              <div
                key={id}
                className="cart_product flex items-start py-4 shadow-2xl shadow-gray-500  px-2.5 rounded-md ease-in-out duration-500 w-full hover:bg-[#efefef]  "
              >
                <img
                  className="cart_image h-full w-24 object-cover"
                  src={p.images[0]}
                  alt=""
                />
                <div className="cart_details flex flex-col p-2 w-[70%] ml-2">
                  <h4 className="text-md text-[#000] font-semibold">
                    {p.name}
                  </h4>
                  <h1 className="text-xl font-mono font-semibold text-gray-900">
                    ₹ {p.price}
                  </h1>
                  <p className="text-[13px]">{p.description}</p>
                </div>

                <div className="cart_buttons w-20 h-full flex items-center justify-around flex-col mt-3 gap-4">
                  <button
                    onClick={() => RemoveCartItem(p.id)}
                    className="bg-rose-500 hover:bg-rose-600 text-white py-1.5 px-3 text-[13px] rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Remove
                  </button>

                  <button
                    onClick={() => BuyNowProduct(p.id)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white py-1.5 px-3 text-[13px] rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
