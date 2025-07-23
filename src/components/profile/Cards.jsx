import React from "react";
import { useData } from "../../context/DataContext";

const cardTypeStyles = {
  silver: "from-gray-200 to-gray-100 text-gray-800",
  gold: "from-yellow-300 to-yellow-200 text-yellow-900",
  platinum: "from-slate-700 to-gray-800 text-white",
};

const CardList = () => {

 let {loggeduser} =  useData()

  let cards = loggeduser.cards

  if (cards.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-10">No cards added yet.</div>
    );
  }

  return (
    <div className="grid  gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {cards.map((card, index) => {
        const typeClass = cardTypeStyles[card.cardType] || cardTypeStyles.silver;
        return (
          <div
            key={index}
            className={`bg-gradient-to-br ${typeClass} p-5 rounded-2xl shadow-lg relative overflow-hidden border border-white/30 backdrop-blur-lg`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold capitalize">{card.cardType} Card</h3>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full uppercase font-semibold tracking-wider">
                {card.bank}
              </span>
            </div>

            <div className="mt-4">
              <p className="text-sm text-white/70">Card Number</p>
              <h2 className="text-lg font-mono tracking-widest">
                {card.cardNumber}
              </h2>
            </div>

            <div className="mt-4 flex justify-between text-xs opacity-80">
              <div>
                <p className="font-medium">CVV</p>
                <p className="font-semibold">{card.cvv}</p>
              </div>
              <div>
                <p className="font-medium">Bank</p>
                <p className="font-semibold">{card.bank}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
