"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineEvents = [
  {
    date: "March 20, 2025",
    title: "Registration Opens",
    description: "Start registering for the most-awaited AI&DS Symposium."
  },
  {
    date: "March 28, 2025",
    title: "Online Registartion Deadline",
    description: "Last date to Register Online."
  },
  {
    date: "March 29, 2025",
    title: "Offline Registration Starts",
    description: "Offline Registartion Starts for Cognista 2k25."
  },
  {
    date: "March 29, 2025",
    title: "Event Kickoff",
    description: "Opening ceremony and keynote speeches from industry leaders."
  },
  {
    date: "March 29, 2025",
    title: "Main Events",
    description: "At 10.00 PM Competitions, workshops, and technical sessions action-packed day."
  },
  {
    date: "March 29, 2025",
    title: "Award Ceremony At 4 PM",
    description: "Closing ceremony and distribution of prizes to the winners."
  }
];

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="timeline" className="section-padding bg-dark/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Event <span className="gradient-text">Timeline</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle"
        >
          Mark your calendars for these important dates and don't miss out on any of the action.
        </motion.p>
        
        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent-cyan to-accent-magenta"></div>
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }} // Adjusted delay
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12 md:mb-16 relative`}
            >
              <div className="md:w-1/2"></div>
              
              {/* Dot on timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-accent-cyan border-4 border-darkBlue z-10"></div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                <div className="bg-darkBlue/30 backdrop-blur-sm p-6 rounded-xl card-glow">
                  <p className="text-accent-cyan font-orbitron font-bold mb-2">{event.date}</p>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
