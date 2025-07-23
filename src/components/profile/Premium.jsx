import React, { useState } from "react";
import { CreditCard, ShieldCheck, BadgeCheck } from "lucide-react";

const PremiumPlans = [
  {
    type: "Silver",
    price: "₹199/month",
    features: ["Priority Support", "Exclusive Deals"],
  },
  {
    type: "Gold",
    price: "₹399/month",
    features: ["Everything in Silver", "Faster Delivery", "Early Access to Sales"],
  },
  {
    type: "Platinum",
    price: "₹699/month",
    features: ["Everything in Gold", "Personal Shopper", "VIP Hotline"],
  },
];

const Premium = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex-grow mx-auto p-8 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Upgrade to Premium</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {PremiumPlans.map((plan, index) => (
          <div
            key={index}
            onClick={() => setSelectedPlan(plan)}
            className={`border p-6 rounded-xl cursor-pointer shadow-sm transition-all hover:shadow-md ${
              selectedPlan?.type === plan.type
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-700">
                {plan.type} Plan
              </h3>
              <BadgeCheck className="text-green-500" />
            </div>
            <p className="text-lg font-bold text-gray-800">{plan.price}</p>
            <ul className="mt-4 text-sm text-gray-600 space-y-1">
              {plan.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">Payment Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md"
            />
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md"
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md"
            />
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 flex items-center gap-2">
            <ShieldCheck size={18} /> Confirm & Upgrade to {selectedPlan.type}
          </button>
        </div>
      )}
    </div>
  );
};

export default Premium;
