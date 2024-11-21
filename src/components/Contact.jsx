import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data
    console.log("Form Data Submitted:", formData);

    // Clear the form inputs
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-background bg-pattern-dots border-b-8 border-black font-cabinet"
    >
      <h2 className="text-4xl font-bold text-center text-black mb-10">Contact</h2>
      <div className="max-w-lg mx-auto flex justify-center flex-col items-center">
        <div className="max-w-lg w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-black font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="p-4 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-black font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="p-4 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-black font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Your Message"
                className="p-4 bg-white border border-gray-300 rounded-md"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 bg-black text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <br />
      <div className="max-w-lg mx-auto flex justify-center space-x-8">
        {/* Email */}
        <a
          href="mailto:shriguhanp@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-600 transition"
        >
          <i className="fas fa-envelope text-4xl"></i>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919489911460"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-600 transition"
        >
          <i className="fab fa-whatsapp text-4xl"></i>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shriguhan-p-9b951022a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-600 transition"
        >
          <i className="fab fa-linkedin text-4xl"></i>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/the.guhan?igsh=emQxaXA0NGIzNDF6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-600 transition"
        >
          <i className="fab fa-instagram text-4xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
