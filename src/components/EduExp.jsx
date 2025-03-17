import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TimelineItem = ({ title, company, date, description }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative pl-10 mb-8 border-l-4 border-green-400"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute w-4 h-4 bg-green-400 rounded-full -left-2 top-1.5"></div>
      <h3 className="text-xl font-bold text-lightText">{title}</h3>
      {company && <h4 className="text-md text-gray-300">{company}</h4>}
      <p className="text-sm text-gray-400 mb-2">{date}</p>
      <p className="text-gray-200">{description}</p>
    </motion.div>
  );
};

const ExperienceEducation = () => {
  const experience = [
    {
      title: "Full Stack Web Developer Intern",
      company: "Horizon Tech Services - NSTP, Islamabad",
      date: "Oct 2024 - Nov 2024",
      description:
        "Developed full-stack web applications using Node.js, React, MySQL, and Express. Improved application performance and debugging using XAMPP Server.",
    },
    {
      title: "Project Management Intern",
      company: "Evamp & Saanga",
      date: "Aug 2024 - Oct 2024",
      description:
        "Led Agile project tracking and planning efforts, improving project delivery timelines by 10%. Managed detailed project schedules using MS Project.",
    },
    {
      title: "Web Development Intern",
      company: "Behindev",
      date: "May 2024",
      description:
        "Developed responsive web applications using HTML, CSS, and JavaScript, improving performance by 20% and enhancing mobile UI/UX.",
    },
  ];

  const education = [
    {
      title: "BS in Information Technology",
      company: "Arid Agriculture University Rawalpindi",
      date: "2020 - 2024",
      description:
        "Completed a Bachelor's degree with a focus on web development, databases, and software engineering. GPA: 3.53/4.0.",
    },
    {
      title: "Advanced Web Application Development",
      company: "NEVTTC",
      date: "2024",
      description: "Completed an advanced certification in web development, covering full-stack technologies.",
    },
    {
        title: "React and Redux Certification Test",
        company: "Complete Coding by Prashant Sir",
        date: "Jan 2025",
        description: "Completed certification in React.js and Redux, validating front-end development skills. Credential ID: IOCFW6D1.",
      },
    {
      title: "Scrum Fundamentals Certified (SFC®)",
      company: "ScrumStudy",
      date: "2024",
      description: "Acquired Agile development knowledge, focusing on Scrum methodologies and project management.",
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center items-center bg-darkBg text-lightText p-10">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Experience & Education
      </motion.h2>

      <div className="max-w-3xl w-full">
        {/* Experience Timeline */}
        <h3 className="text-2xl font-semibold text-green-400 mb-4">Experience</h3>
        {experience.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}

        {/* Education Timeline */}
        <h3 className="text-2xl font-semibold text-green-400 mt-8 mb-4">Education & Certifications</h3>
        {education.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceEducation;
