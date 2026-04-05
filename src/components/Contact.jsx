import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { useTheme } from "../ThemeContext";

const Contact = () => {
  const sound = new Audio("./message-sent.mp3");
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { theme } = useTheme();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_o8fcxgw",
        "template_8lzvylt",
        {
          from_name: form.name,
          to_name: "Soumyadeep Roy Chowdhury",
          from_email: form.email,
          to_email: "soumyadeeproychowdhury101@gmail.com",
          message: form.message,
        },
        "nzNqmR_IwqpM8bN25"
      )
      .then(
        () => {
          setLoading(false);
          sound.play();

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      {/* Added relative z-50 to ensure headers are above everything */}
      <motion.div className="section relative z-50" id="contact" variants={textVariant()}>
        <p className={`secondaryText sm:text-[18px] text-[14px] uppercase tracking-wider text-center`}>
          GET IN TOUCH
        </p>
        <h2 className={`primaryText font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}>
          CONTACT
        </h2>
      </motion.div>
      
      <style>
        {`
            .primaryText { color: ${theme.primaryColor}; }
            .secondaryText { color: ${theme.secondaryColor}; }
            .send-btn {
              mask-image: url('/send.png');
              mask-size: contain;
              mask-repeat: no-repeat;
              -webkit-mask-image: url('/send.png');
              -webkit-mask-size: contain;
              -webkit-mask-repeat: no-repeat;
              background-color: white;
            }
            .send-btn:hover {
              background-color: ${theme.primaryColor};
            }
          `}
      </style>

      {/* THE FIX: relative z-50 pulls this container above all backgrounds. */}
      <div className={`relative z-50 flex justify-center mt-7`}>
        <motion.div
          /* Swapped "fade" to "up" to ensure framer-motion builds the bounding box correctly */
          variants={slideIn("up", "tween", 0.2, 1)}
          /* Added bg-black and pointer-events-auto */
          className="flex-[0.75] bg-black border border-white p-8 rounded-2xl pointer-events-auto shadow-xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <div className="flex flex-col sm:flex-row gap-8">
              <label className="flex-1">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full bg-black py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-white font-medium"
                />
              </label>
              <label className="flex-1">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full bg-black py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-white font-medium"
                />
              </label>
            </div>
            <label className="flex flex-col">
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                required
                className="bg-black py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-white font-medium"
              />
            </label>

            <button type="submit" className="flex justify-end cursor-pointer">
              {loading ? (
                <span className="text-white font-bold">Sending...</span>
              ) : (
                <span className="send-btn w-[35px] h-[35px] inline-block transition-all duration-300" />
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");