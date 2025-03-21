"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMedal, FaTrophy, FaCrown } from 'react-icons/fa';

const prizeTiers = [
  {
    icon: <FaTrophy size={48} className="text-[#C0C0C0]" />,
    tier: "Silver",
    amount: "₹25,000",
    features: [
      "Cash prize",
      "Certification",
      "Branded merchandise",
      "Recognition on website",
      "Special mentions in press release"
    ]
  },
  {
    icon: <FaCrown size={48} className="text-[#FFD700]" />,
    tier: "Gold",
    amount: "₹50,000",
    features: [
      "Cash prize",
      "Certification",
      "Branded merchandise",
      "Recognition on website",
      "Special mentions in press release",
      "Internship opportunities",
      "Mentorship sessions"
    ]
  },
  {
    icon: <FaMedal size={48} className="text-[#CD7F32]" />,
    tier: "Bronze",
    amount: "₹15,000",
    features: [
      "Cash prize",
      "Certification",
      "Branded merchandise",
      "Recognition on website"
    ]
  }
];

const Prizes = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="prizes" className="section-padding bg-darkBlue/80" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center text-white"
        >
          <span className="gradient-text">Prizes</span> & Rewards
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle text-center text-gray-300 mt-4"
        >
          Compete for exciting prizes and rewards worth over ₹1,00,000 along with opportunities
          to showcase your talent and connect with industry leaders.
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {/* Rearranging prize order to show Gold in center */}
          {[prizeTiers[1], prizeTiers[0], prizeTiers[2]].map((prize, index) => {
            // Special scaling for the gold (first) tier
            const isGold = index === 0;
            
            return (
              <motion.div
                key={prize.tier}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`w-full sm:w-80 ${isGold ? 'sm:w-96' : ''}`}
              >
                <div 
                  className={`rounded-2xl overflow-hidden transition-transform transform hover:scale-105 ${
                    isGold 
                      ? 'bg-gradient-to-b from-[#FFD700]/20 to-darkBlue/80 border-2 border-[#FFD700]/30' 
                      : 'bg-darkBlue/30 backdrop-blur-sm'
                  } card-glow h-full shadow-lg hover:shadow-2xl`}
                >
                  <div 
                    className={`p-6 text-center ${isGold ? 'pt-8' : 'pt-6'}`}
                  >
                    <div className="flex justify-center mb-4">
                      {prize.icon}
                    </div>
                    <h3 className={`font-orbitron text-2xl ${isGold ? 'text-3xl' : ''} font-bold mb-2 text-white`}>
                      {prize.tier}
                    </h3>
                    <div className={`text-4xl ${isGold ? 'text-5xl' : ''} font-orbitron font-bold mb-6 text-white`}>
                      {prize.amount}
                    </div>
                    <ul className="text-left space-y-3 text-gray-300">
                      {prize.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-5 w-5 text-accent-cyan mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Additionally, all participants will receive certificates and exclusive symposium merchandise.
          </p>
          <a 
            href="#register" 
            className="btn-primary inline-block text-white bg-accent-cyan hover:bg-cyan-600 transition duration-300 py-3 px-6 rounded-lg shadow-md hover:shadow-lg"
          >
            Register to Win
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
