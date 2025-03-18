"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, subject, message } = formData;

    // Construct the mailto link
    const mailtoLink = `mailto:ziggy@mashbillspirits.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${firstName} ${lastName}\nMessage: ${message}`
    )}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div
        className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 relative"
        id="contact"
      >
        {/* Glowing Background Circle */}
        <div className="absolute top-[3rem] -right-[30rem] transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-[#ed0000] blur-3xl xl:w-[800px] xl:h-[700px] hidden lg:block rounded-full opacity-10" />
        </div>

        <div className="flex flex-col xl:flex-row gap-20 ">
          {/* Heading */}
          <div className="text-white flex-1">
            <h2 className="text-4xl uppercase mb-6 text-right">Contact Us</h2>
            <h2 className="text-4xl uppercase mb-6 text-right">
              let’s craft <br /> the next <br /> iconic <br /> spirits <br />{" "}
              brand.
            </h2>
          </div>

          {/* Form */}
          <div className="flex-1/2 z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Last Name */}
              <div className="space-y-2">
                <label className="block font-bold text-sm text-white">
                  Name
                </label>
                <div className="flex md:flex-row flex-col md:space-x-4">
                  {/* First Name */}
                  <div className="flex-1">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded border-gray-400 bg-transparent text-white placeholder-white/50 focus:outline-none"
                      required
                    />
                    <p className="font-bold text-sm mt-3 text-white">
                      First Name
                    </p>
                  </div>

                  {/* Last Name */}
                  <div className="flex-1">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded border-gray-400 bg-transparent text-white placeholder-white/50"
                      required
                    />
                    <p className="font-bold text-sm text-white mt-3">
                      Last Name
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-bold text-sm text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border rounded border-gray-400 text-white placeholder-white/50 focus:outline-none"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block font-bold text-sm text-white mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border rounded border-gray-400 text-white placeholder-white/50 focus:outline-none"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-bold text-sm text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 bg-transparent border rounded border-gray-400 text-white placeholder-white/50 focus:outline-none"
                  required
                />
              </div>

              {/* Send Button */}
              <div>
                <button
                  type="submit"
                  className="uppercase bg-[#ed0000] px-6 py-1 font-bold text-white hover:bg-[#c40000] transition-colors duration-300 focus:outline-none cursor-pointer"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-20">
        <hr className="border-white/10 border xl:w-[80%] w-full" />
      </div>
    </div>
  );
};

export default Contact;