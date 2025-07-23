import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const PUBLIC_KEY = "your_public_key";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        alert("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch(() => {
        alert("❌ Failed to send message. Try again.");
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Contact Info Panel */}
          <div className="bg-blue-50 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
              Have any questions or feedback? We're here to help. Reach out to us through the following channels or use the form.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" />
                <span className="text-gray-700">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <span className="text-gray-700">support@ecomart.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />
                <span className="text-gray-700">Greater Noida, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all disabled:opacity-60"
              >
                {loading ? "Sending..." : <> <Send size={18} /> Send Message </>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
