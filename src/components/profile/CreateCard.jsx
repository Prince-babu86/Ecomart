import React, { useState } from "react";
import { useData } from "../../context/DataContext";
import { nanoid } from "nanoid";

const CreateCard = () => {
  const [card, setCard] = useState({
    id:nanoid(),
    cardNumber: "",
    cvv: "",
    bank: "State Bank of India",
    cardType: "silver",
    balance:10000
  });

  const [loader, setloader] = useState(false);
  let { loggeduser, setloggeduser, users, setusers } = useData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    setloader(true);
    e.preventDefault();
    let notif = {
      id: Date.now(),
      tittle: "Card Created sucessfully",
      message: `your ${card.cardType} is created sucessfuly with a ${card.cardNumber} `,
      createdAt: new Date().toISOString(),
    };
    let { cardNumber } = card;
    let findedcard = loggeduser.cards.find((c) => c.cardNumber === cardNumber);
    setTimeout(() => {
      if (!findedcard) {
        let updateduser = {
          ...loggeduser,
          notifications: [...(loggeduser.notifications || []), notif],
          cards: [...(loggeduser.cards || []), card],
        };

        setloggeduser(updateduser);

        setusers((prev) =>
          prev.map((c) =>
            c.userId === loggeduser.userId
              ? {
                  ...c,
                  cards: [...(loggeduser.cards || []), card],
                  notifications: [...(loggeduser.notifications || []), notif],
                }
              : c
          )
        );
        setloader(false);
        setCard({
          cardNumber: "",
          cvv: "",
          bank: "State Bank of India",
          cardType: "silver",
        });
      }
      setloader(false);
      return;
    }, 3000);
    console.log("Card Created:", card);
  };

  const generateCardNumber = () => {
    const random = () => Math.floor(1000 + Math.random() * 9000).toString();
    const newCardNumber = `${random()} ${random()} ${random()} ${random()}`;
    setCard((prev) => ({ ...prev, cardNumber: newCardNumber }));
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Create New Card
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Card Number with Refresh Icon */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <div className="relative mt-1">
              <input
                required
                type="text"
                name="cardNumber"
                value={card.cardNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black outline-none"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
              <button
                type="button"
                onClick={generateCardNumber}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                title="Generate Card Number"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 4 23 10 17 10" />
                  <polyline points="1 20 1 14 7 14" />
                  <path d="M3.51 9a9 9 0 0114.13-3.36L23 10M1 14l5.36 5.36A9 9 0 0020.49 15" />
                </svg>
              </button>
            </div>
          </div>

          {/* CVV */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              required
              type="password"
              name="cvv"
              value={card.cvv}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black outline-none"
              placeholder="123"
              maxLength={3}
            />
          </div>

          {/* Bank Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bank
            </label>
            <select
              required
              name="bank"
              value={card.bank}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black outline-none"
            >
              <option>State Bank of India</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
              <option>Kotak Mahindra Bank</option>
            </select>
          </div>

          {/* Card Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Type
            </label>
            <select
              required
              name="cardType"
              value={card.cardType}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black outline-none"
            >
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
              <option value="platinum">Platinum</option>
            </select>
          </div>

          {!loader ? (
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-900 transition-all"
            >
              Create Card
            </button>
          ) : (
            <button
              type="reset"
              className="w-full bg-black text-white font-semibold flex items-center justify-center py-3 rounded-xl hover:bg-gray-900 transition-all"
            >
              <span className="h-4 w-4 rounded-full border-2 border-r-transparent animate-spin duration-500 ease-in-out"></span>
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateCard;
