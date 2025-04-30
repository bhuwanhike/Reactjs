import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col pl-30 pr-30 gap-4 " id="contact">
      <input
        type="text"
        placeholder="Your name"
        className="bg-[#222222] p-3 placeholder:text-gray-400 rounded-md"
      />
      <input
        type="email"
        placeholder="Your email"
        className="bg-[#222222] p-3 placeholder:text-gray-400 rounded-md"
      />
      <textarea
        name=""
        placeholder="Your message"
        id=""
        className="bg-[#222222] p-3 placeholder:text-gray-400 rounded-md"
      ></textarea>
    </div>
  );
};

export default Contact;
