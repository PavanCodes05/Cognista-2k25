"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FaBrain, FaRobot, FaChartLine, FaNetworkWired } from 'react-icons/fa';

const features = [
  {
    icon: <FaRobot size={36} className="text-accent-magenta" />,
    title: "Natural Lanugage Processing",
    description: "Discover cutting-edge AI technologies that are reshaping our digital landscape.",
    link: "https://forms.gle/ULKy69aq9S23iXYa6"
  },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          ASTROZ STUDENT ASSOCIATION PRESENTS
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-title"
        >
            <span className="gradient-text">Cognista 2k25</span>
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="section-subtitle"
        >
          Cognista 2k25 is where innovation meets intelligence, providing a platform for AI enthusiasts, 
          data scientists, and researchers to connect, learn, and showcase their talents in the field of 
          Artificial Intelligence and Data Science.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-orbitron text-2xl md:text-3xl font-bold mb-6">
              Explore the Future of <span className="gradient-text">AI & Data Science</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Organized by the Department of AI & DS, Cognista 2k25 brings together 
              students, and professors for one-day extravaganza filled 
              with technical events, non-techincal events and workshops.
            </p>
            <p className="text-gray-300 mb-6">
              Whether you're a seasoned developer or just starting your journey in AI, our symposium 
              offers something for everyone. Enhance your skills, network with like-minded individuals, 
              and get inspired by the latest trends in artificial intelligence and data science.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Hand Picked Technical Events On-Trend</li>
              <li>Hands-on workshops and coding challenges</li>
              <li>Exciting competitions with attractive prizes</li>
              <li>Networking opportunities with professionals</li>
              <li>Certificates for all participants</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative min-h-[300px] md:min-h-[400px] rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-magenta/20 flex items-center justify-center">
              <div className="text-7xl font-orbitron font-bold opacity-50">Astroz</div>
            </div>
          </motion.div>
        </div>
        <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          <span className="gradient-text">Workshop</span> 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle text-center text-gray-300 mb-12"
        >
        </motion.p>
        </div>
        
        <div className="flex items-center justify-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-darkBlue/30 backdrop-blur-sm p-6 rounded-xl card-glow"
          >
            <div className="mb-4">{features[0].icon}</div>
            <h4 className="font-orbitron text-xl font-bold mb-2">{features[0].title}</h4>
            <p className="text-gray-300">{features[0].description}</p>
          </motion.div>
          <br />
        <div className="px-6 py-4 bg-darkBlue/50 flex justify-between items-center">
                <a 
                  href={features[0].link}
                  target='_blank' 
                  className="btn-primary inline-flex items-center text-white bg-accent-cyan hover:bg-accent-cyan/80 transition-all duration-300 py-3 px-6 rounded-md text-xl"
                >
                  Register Now 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
        </div>
      </div>
    </section>
  );
};


export default About;

