import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import { nanoid } from "nanoid";

const PaymentPage = () => {
  const location = useLocation();
  const { orderItem, user } = location.state || {};
  //(orderItem);

  let {
    loggeduser,
    setloggeduser,
    users,
    setusers,
    setreloader,
    popup,
    setpopup,
  } = useData();
  let card = loggeduser?.cards[0];

  const price = orderItem?.price || 1499;
  const qty = orderItem?.qty || 1;
  const subtotal = price * qty;
  const shipping = 49;
  const tax = 75;
  const total = parseInt(orderItem?.total) + shipping + tax;

  const [cvv, setcvv] = useState("");
  const [loader, setloader] = useState(false);

  const [Payment, setPayment] = useState({
    orderItem: orderItem,
    price: total,
    paymentMethd: card?.cardType,
    card: card,
    orederid: nanoid(),
    orderStatus: true,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!card) {
      // setpopup({tittle:"Page Not Found please check out"})
      navigate("/profile/create-cards" , {state:{  cameFromPayment: true , orderItem}});
    }
  }, [card]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setloader(true);
    setTimeout(() => {
      if (cvv === card.cvv) {
        let notif = {
          tittle: "Order Sucessfully ordered",
          message: `your order is ${orderItem.name} is ordered sucessfully`,
          id: Date.now(),
          createdAt: new Date().toISOString(),
          images: orderItem.image,
        };

        if (card.balance < total || Number.isNaN(card.balance)) {
          alert("Insufficient balance!");
          setloader(false);
          setcvv("");
          return;
        }

        let updatedcard = {
          ...card,
          balance: card.balance - total,
        };

        //(updatedcard);

        let updateduser = {
          ...loggeduser,
          orders: [...(loggeduser.orders || []), Payment],
          notifications: [...(loggeduser.notifications || []), notif],
          cards: [
            ...loggeduser.cards.map((c) =>
              c.id === card.id ? { ...c, ...updatedcard } : c
            ),
          ],
        };
        setloggeduser(updateduser);
        setusers((prev) =>
          prev.map((u) =>
            u.userId === loggeduser.userId
              ? {
                  ...u,
                  orders: [...(loggeduser.orders || []), Payment],
                  notifications: [...(loggeduser.notifications || []), notif],
                  cards: [
                    ...loggeduser.cards.map((c) =>
                      c.id === card.id ? { ...c, ...updatedcard } : c
                    ),
                  ],
                }
              : u
          )
        );
        setcvv("");
        setloader(false);
        setreloader(true);
        navigate(
          `/product/${orderItem.id}/check-out/${Payment.orederid}/order-sucessfully`
        );
        setTimeout(() => {
          setreloader(false);
        }, 1000);
      } else {
        setcvv("");
        setloader(false);
        setpopup({tittle:"cvv no is Wrong"})
        setTimeout(() => {
          setpopup(null)
        }, 3000);
      }
    }, 3000);
  };

  // const location = useLocation();

   useEffect(() => {
    // If no state, redirect (means user typed URL manually)
    if (!location.state?.cameFromProduct) {
      navigate("/", { replace: true });
    }
  }, [location]);

  //(popup);
  return (
    <>
      {card ? (
        <div className="min-h-screen w-full bg-[#f8f9fb] text-[#222] flex flex-col pb-20 md:flex-row items-start justify-center px-6 py-10 gap-8">
          {/* LEFT: Product Summary */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="flex items-center gap-4 mb-6">
              <img
                src={
                  orderItem?.image ||
                  "https://i.pinimg.com/736x/e0/58/ff/e058ff871a00859db8f59c6cbe18540d.jpg"
                }
                alt="Product"
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {orderItem?.name || "Cotton Oversized T-Shirt"}
                </h3>
                <p className="text-gray-500 text-sm">
                  Color: {orderItem?.color || "Black"} • Size:{" "}
                  {orderItem?.size || "M"}
                </p>
                <p className="text-gray-900 font-bold mt-2">
                  ₹{orderItem?.price}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Qty: {orderItem?.qty}
                </p>
              </div>
            </div>

            <hr className="border-gray-200 my-4" />

            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>₹{orderItem?.total}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Tax</span>
              <span>₹{tax}</span>
            </div>

            <hr className="border-gray-200 my-4" />

            <div className="flex justify-between font-semibold text-lg text-gray-800">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            {/* Address Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Delivery Address
              </h3>
              <p className="text-sm text-gray-700">
                {loggeduser?.address?.house ||
                  loggeduser?.address?.city ||
                  "123 Main Street, New Delhi, India"}
              </p>
            </div>
          </div>

          {/* RIGHT: Payment Details */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Payment Details
            </h2>

            <form onSubmit={handleOnSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name on Card
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={loggeduser?.name}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="xxxx xxxx xxxx xxxx"
                  value={`**** **** **** ${card.cardNumber.slice(-4)}`}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black outline-none"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    CVV
                  </label>
                  <input
                    onChange={(e) => setcvv(e.target.value)}
                    maxLength={3}
                    minLength={3}
                    required
                    type="password"
                    placeholder="•••"
                    className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black outline-none"
                  />
                </div>
              </div>

              {!loader ? (
                <button
                  type="submit"
                  className="w-full mt-6 bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-900 transition-all"
                >
                  Pay ₹{total}
                </button>
              ) : (
                <button
                  type="reset"
                  className="w-full mt-6 bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-900 transition-all flex items-center justify-center"
                >
                  <span className="h-5 w-5 rounded-full border-2 border-t-transparent animate-spin duration-500 ease-in-out"></span>
                </button>
              )}
            </form>

            {/* User Info */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Customer Details
              </h3>
              <p className="text-sm text-gray-700">Name: {loggeduser?.name}</p>
              <p className="text-sm text-gray-700">
                Email: {loggeduser?.email}
              </p>
              <p className="text-sm text-gray-700">
                Phone: {loggeduser?.phone}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={`/profile`} replace />
      )}
    </>
  );
};

export default PaymentPage;
