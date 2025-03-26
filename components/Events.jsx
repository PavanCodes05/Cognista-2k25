"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaChartBar, FaChalkboardTeacher, FaCode, FaLightbulb, FaRobot, FaCamera, FaAngrycreative } from 'react-icons/fa';

const events = [
  {
    id: "Aesthetic Arc",
    icon: <FaAngrycreative size={36} className="text-accent-cyan transition-transform duration-300 transform hover:scale-110" />,
    title: "Aesthetic Arc",
    link: "https://forms.gle/MKKd2dNgF4yMHf9CA",
    description: "Bring Out Your Creativity By Building The UI/UX Designs For Our Requirements(Topic and Context Will Be Given ONSPOT)",
    teamSize: "1 or 2",
    categories: ["UI/UX Design", "User Experience"]
  },
  {
    id: "Tech Talk",
    icon: <FaLightbulb size={36} className="text-accent-cyan transition-transform duration-300 transform hover:scale-110" />,
    title: "Tech Talk",
    description: "Themes: Explainable AI(XAI), Edge AI, Neuro Symbolic AI, AIoT",
    link: "https://forms.gle/ePEci3ZjZnqbR1y47",
    teamSize: "1 to 3(max)",
    categories: ["Paper Presentation", "Innovations"]
  },
  {
    id: "Data Dive",
    icon: <FaChartBar size={36} className="text-accent-magenta transition-transform duration-300 transform hover:scale-110" />,
    title: "Data Dive",
    link: "https://forms.gle/zGdhjm7w74XezaiDA",
    description: "Clean, Transfor and Visualize Data!. Harness Your Analytical Skills To Turn Raw Datasets Into Powerful Insights With PowerBI or Tableau.",
    teamSize: "2 or 3(max)",
    categories: ["Data Visualization", "Data Analysis"]
  },
  {
    id: "Bug Bounty",
    icon: <FaCode size={36} className="text-accent-magenta transition-transform duration-300 transform hover:scale-110" />,
    title: "Bug Bounty",
    description: "Test your programming skills by debugging code in this AI-focused coding competition with algorithmic challenges.",
    link: "https://forms.gle/ZaWio99jRutKR4zU7",
    teamSize: "Individual",
    categories: ["Code Debugging", "Individual"]
  },
  {
    id: "Lens Legacy",
    icon: <FaCamera size={36} className="text-accent-cyan transition-transform duration-300 transform hover:scale-110" />,
    title: "Lens Legacy",
    description: "Photography Event.",
    link: "https://forms.gle/kUhr7Vj47aKLMpqN8",
    teamSize: "Individual",
    categories: ["Photographs", "Capture Moments"]
  },
  {
    id: "Cognitive Clash",
    icon: <FaRobot size={36} className="text-accent-magenta transition-transform duration-300 transform hover:scale-110" />,
    title: "Cognitive Clash",
    description: "AI vs Human Intervention Debate.",
    link: "https://forms.gle/ryGX9t24qri1L2LX7",
    teamSize: "2 or 3 (max)",
    categories: ["Debate", "AI vs Human"]
  }
];

const Events = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="events" className="section-padding bg-darkBlue-800" ref={ref}>

      <div className="container mx-auto px-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-yellow-500 font-bold mb-12 sm:mb-16"
      >
        For Team Participation, Each Individual Participant Must Register!
      </motion.p>
        

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          <span className="gradient-text">Events</span> & Competitions
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle text-center text-gray-300 mb-12"
        >
          Participate in our cutting-edge events designed to challenge your skills, expand your knowledge, and connect you with the AI community.
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-darkBlue/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="mb-4">{event.icon}</div>
                <h3 className="font-orbitron text-2xl font-bold mb-2 text-accent-cyan">{event.title}</h3>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="text-lg font-bold text-accent-cyan">
                  {`Team-size: ${event.teamSize}`}
                </div>
                <br />
                <div className="flex flex-wrap gap-2">
                  {event.categories.map((category) => (
                    <span 
                      key={category} 
                      className="text-xs px-3 py-1 rounded-full bg-accent-cyan/20 text-accent-cyan"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>

        <div className="px-6 py-4 bg-darkBlue/50 flex justify-center items-center">
            <a 
              href="https://forms.gle/PPHnUP1XY13jPZ7S7"
              target='_blank' 
              className="btn-primary inline-flex items-center text-white bg-accent-cyan hover:bg-accent-cyan/80 transition-all duration-300 py-3 px-6 rounded-md text-xl"
            >
              Register Now 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
