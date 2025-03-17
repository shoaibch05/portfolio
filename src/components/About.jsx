import { motion } from "framer-motion";
import aboutImg from "../assets/Shoaib1.jpeg";
import wordpress from "../assets/wordpress.svg";
import mysql from "../assets/mysql-icon.svg";
import htmlIcon from "../assets/html-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import nodeIcon from "../assets/node-icon.svg";
import reactIcon from "../assets/react-icon.svg";
import boostrapIcon from "../assets/bootstrap-icon.svg";


const About = () => {
 
  return (
    <div  id="about" className="min-h-screen flex flex-col md:flex-row justify-between scroll-mt-16 px-10">

    <section id="aboutus" className="min-h-screen justify-center flex flex-col p-10">
      <motion.h2
        className="text-4xl text-green-500 font-bold mb-6"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg max-w-xl leading-relaxed"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I'm Shoaib Shamrez, a Full-Stack Web Developer with expertise in React.js, Node.js, MySQL, and Firebase. I specialize in building scalable, high-performance applications with a strong focus on user experience and clean code.
      </motion.p>
      <motion.p
        className="text-lg max-w-xl leading-relaxed"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        With hands-on experience in both front-end and back-end technologies, I enjoy solving complex problems and creating intuitive digital solutions. My projects range from e-commerce platforms to custom web applications, ensuring seamless functionality and efficiency.
      </motion.p>
      <motion.p
        className="text-lg max-w-xl leading-relaxed"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
       Beyond custom development, I’m also proficient in WordPress, allowing my clients to manage and update their websites effortlessly. Whether you need a Next.js-powered application, a React-based UI, or a WordPress site with dynamic content, I can deliver solutions tailored to your needs.
      </motion.p>
      <motion.p
        className="text-lg max-w-xl leading-relaxed"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
       If you're looking for a modern website or want to enhance your online presence, let's connect and turn your vision into reality!
      </motion.p>
      <motion.h3
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="text-green-500 text-xl mb-0.5"
      >Here are my Main Skills</motion.h3>
      <motion.ul
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-lg flex flex-wrap gap-2.5 mt-1 justify-center md:justify-start max-w-xl leading-relaxed"
      >
       <li className="w-8"><img src={reactIcon} /></li>
       <li className="w-8"><img src={htmlIcon} /></li>
       <li className="w-8"><img src={cssIcon} /></li>
       <li className="w-8"><img src={jsIcon} /></li>
       <li className="w-8"><img src={nodeIcon} /></li>
       <li className="w-8"><img src={wordpress} /></li>
       <li className="w-8"><img src={boostrapIcon} /></li>
       <li className="w-8"><img src={mysql} /></li>

      </motion.ul>

    </section>
    <section className="flex items-center">
      <motion.img
       src={aboutImg}
       alt="About"
       className="w-[350px] md:w-[450px] mt-10 md:mt-0 rounded-full"
       initial={{ opacity: 0, scale: 0.7, x: -60 }}
       whileInView={{ opacity: 1, scale: 1, x: 0 }}
       transition={{ duration: 1, delay: 1 }}>
       
      </motion.img>
    </section>
    </div>
  );
};

export default About;
