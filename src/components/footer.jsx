import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo / Branding */}
        <h2 className="text-2xl font-bold text-white">&lt;Shoaib Shamrez/&gt;</h2>
        
        {/* Navigation Links */}
        <nav className="my-4 md:my-0">
          <ul className="flex gap-6">
            <li><a href="#home" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-green-400 transition">About</a></li>
            <li><a href="#experience" className="hover:text-green-400 transition">Experience</a></li>
            <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex gap-4">
          <a href="https://github.com/shoaibch05" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/shoaib-ch" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:shoaibshamrez@gmail.com" className="hover:text-green-400 transition">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Shoaib Shamrez. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
