import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on navigation
  };

  return (
    <nav className="fixed w-full top-0 z-50 text-white flex justify-between items-center px-10 py-4 backdrop-blur-lg shadow-lg">
      <h1 className="text-2xl font-bold">&lt;Shoaib Shamrez/&gt;</h1>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      {/* Navbar Items */}
      <ul className={`md:flex gap-6 items-center absolute md:static top-16 left-0 w-full bg-black md:bg-transparent md:w-auto flex flex-col md:flex-row transition-transform duration-300 ease-in-out ${menuOpen ? "block" : "hidden"}`}>
        {["home", "about", "experience", "contact"].map((section) => (
          <li key={section} className="text-center py-2 md:py-0">
            <a
              href={`#${section}`}
              onClick={(e) => handleSmoothScroll(e, section)}
              className="hover:text-gray-400 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
        <a
          href="../src/assets/Shoaib_Shamrez_CV.pdf"
          target="_blank"
          className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition text-center md:ml-4"
        >
          Resume
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
