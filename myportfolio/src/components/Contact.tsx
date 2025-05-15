import ImageCard from "./ImageCard";
import faceIcon from "../assets/facebook-icon.png";
import twit from "../assets/twitter.png";
import yt from "../assets/youtube.png";
import insta from "../assets/instagram.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2ias6gq", "template_yq7w6t9", form.current, {
        publicKey: "8t4IXnEb-RPwcTt5C",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section
        id="contact"
        className="sm:pr-10 sm:pl-10 bg-gradient-to-b from-blue-700 to-blue-600 pb-8 xl:pr-50 xl:pl-50 2xl:pr-70 2xl:pl-70"
      >
        <div className="flex flex-col  gap-6 " id="contact">
          <h1 className="text-5xl text-white font-bold mx-auto mt-10">
            Contact Me
          </h1>
          <p className="pr-10 pl-10 text-center text-white text-[20px]">
            Please fill out the form below to discuss any work opportunities.
          </p>

          <div className="icons flex mx-auto gap-5">
            <ImageCard image={faceIcon} width={10} height={200} />
            <ImageCard image={twit} width={10} height={200} />
            <ImageCard image={yt} width={10} height={200} />
            <ImageCard image={insta} width={10} height={200} />
          </div>
          <form
            action=""
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col pr-10 pl-10 gap-6 mt-4"
          >
            <input
              type="text"
              placeholder="Your name"
              className="bg-[#222222] p-3 placeholder:text-gray-400 rounded-md h-14"
              name="your_name"
            />
            <input
              type="email"
              placeholder="Your email"
              className="bg-[#222222] p-3 placeholder:text-gray-400 rounded-md h-14"
              name="your_email"
            />
            <textarea
              name="message"
              placeholder="Your message"
              id=""
              rows={10}
              className="bg-[#222222] p-3 placeholder:text-gray-400 rounded-md"
            ></textarea>
            <button className="text-black bg-white rounded-md w-fit p-2 pl-10 pr-10 mx-auto ">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
