import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  console.log("public values are", import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setFormData({ email: "", message: "" });
          setLoading(false);
        },
        () => {
          setStatusMessage("Failed to send the message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen mt-20 flex flex-col justify-center items-center bg-transparent text-white p-10 relative overflow-hidden"
    >
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Contact
      </motion.h2>
      <motion.p
        className="text-center text-lg text-gray-400 mb-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Ready to get started on your project? Contact me now for a free consultation.
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center bg-green-500 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-green-600 transition">
          <FaEnvelope className="text-2xl mr-3" />
          <a href="mailto:shoaibshamrez@gmail.com" className="text-white text-lg">
            shoaibshamrez@gmail.com
          </a>
        </div>
        <div className="flex items-center bg-green-500 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-green-600 transition">
          <FaPhone className="text-2xl mr-3" />
          <a href="tel:+923115926316" className="text-white text-lg">
            +92 311 5926316
          </a>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-lg"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-center">
          Get in touch using the form
        </h3>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Send a message to get started."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 h-32 bg-gray-800 text-white rounded-lg focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full mt-4 p-3 bg-green-500 rounded-lg hover:bg-green-600 transition flex justify-center items-center"
          disabled={loading}
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="animate-spin text-xl" />
          ) : (
            "Send Message"
          )}
        </button>
        {statusMessage && (
          <p className="text-center mt-3 text-sm text-gray-300">{statusMessage}</p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;
