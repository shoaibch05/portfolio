import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import githubIcon from "../assets/github.svg";

const Work = () => {
  return (
    <section id="work" className="min-h-screen bg-darkBg text-lightText scroll-mt-16 flex flex-col items-center p-10 mt-12">
      <h2 className="text-4xl font-bold mb-6">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="React Chat Application (GupShup)"
          description="Built a chat application using React.js and Firebase with authentication and room management."
          link="https://gupshup-one.vercel.app"
          github="https://github.com/shoaibch05/ChatApp"
          technologies={["React.js", "Firebase", "Tailwind CSS"]}
        />
        <ProjectCard
          title="Online Code Editor (CodePen Clone)"
          description="Real-time code editor for HTML, CSS, and JavaScript with live rendering."
          link="https://code-editor-beryl.vercel.app"
          github="https://github.com/shoaibch05/CodeEditor"
          technologies={["React.js", "Code Mirror", "Vercel"]}
        />
        <ProjectCard
          title="Responsive Landing Page"
          description="Designed a modern landing page using HTML, CSS, and JavaScript."
          link="https://landing-page-orpin-pi.vercel.app"
          github="https://github.com/shoaibch05/LandingPage"
          technologies={["HTML", "CSS", "JavaScript"]}
        />
        <ProjectCard
          title="Waste Management Website"
          description="Developed a PHP & MySQL-based website for scheduling waste pickups with an admin panel."
          github="https://github.com/shoaibch05/ces.git"
          technologies={["HTML","CSS", "PHP", "MySQL", "Bootstrap"]}
        />
        <ProjectCard
          title="Arra Group Website (WordPress)"
          description="Created a WordPress website showcasing services and projects."
          link="https://arragroupofcompanies.wordpress.com/"
          technologies={["WordPress", "Site Builder", " Additional CSS"]}
        />
        <ProjectCard
          title="Royalton Hotel Website (WordPress)"
          description="Developed a booking and amenities website for Royalton Hotel."
          link="https://royaltonrawalpindi.wordpress.com/"
          technologies={["WordPress", "CSS", "Theme Builder"]}
        />
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, link, github, technologies }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-pink-800 transition flex flex-col h-full"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      <div className="mt-4 mb-4">
        <h4 className="font-semibold text-green-400">Technologies:</h4>
        <ul className="list-disc list-inside text-gray-300">
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 mt-auto">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400">Live Demo</a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="w-6 h-6 inline-block" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Work;