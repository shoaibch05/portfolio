import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegram } from "react-icons/fa";
import Hello from "../assets/Hello.gif";
import Shoaib from "../assets/undraw_feeling-proud_tdos.svg";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-16 mt-16 md:scroll-mt-0  relative z-10 min-h-screen flex flex-col justify-center items-center text-white px-10"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        <div className="text-left ">
          <h3 className="text-xl flex">
            Hello <img src={Hello} width={"20px"} alt="Hello" />, I'm
          </h3>
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Shoaib Shamrez
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-green-400 text-l"
          >
            MERN Stack | REACT | Wordpress | JWT Auth | Frontend Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-400"
          >
            IT Graduate | Jr Web Developer | Jr Software Engineer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-400"
          >
            MERN Stack Developer with experience in React.js, Redux, Node.js,
            Express.js, and MongoDB. Skilled in building scalable,
            high-performance web applications, developing RESTful APIs, and
            implementing secure JWT authentication. Strong knowledge of
            responsive design, cross-browser compatibility, and cloud deployment
            (Vercel, Railway). Adept at Agile methodologies and collaborating
            with cross-functional teams.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-4 inline-block bg-green-500 px-6 py-2 text-lg rounded-md text-white hover:bg-green-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex gap-4 mt-4"
          >
            <a
              href="https://www.linkedin.com/in/shoaib-ch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                className="hover:text-blue-400 transition cursor-pointer"
              />
            </a>
            <a
              href="https://github.com/shoaibch05"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                className="hover:text-gray-400 transition cursor-pointer"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=923115926316&amp;text=Hi!%20Shoaib,%20I%20have%20seen%20your%20portfolio%20and%20want%20to%20talk%20with%20you!."
              target="_blank"
            >
              <FaWhatsapp
                size={30}
                className="hover:text-green-400 transition cursor-pointer"
              />
            </a>

            <a
              href="http://t.me/ShoaibChOfficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram
                size={30}
                className="hover:text-blue-400 transition cursor-pointer"
              />
            </a>
          </motion.div>
        </div>

        <motion.img
          src={Shoaib}
          alt="Hero"
          className="hidden md:block md:w-[450px] md:mt-0 "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>
    </section>
  );
};

export default Hero;
