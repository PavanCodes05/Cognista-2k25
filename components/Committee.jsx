"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const committeeMembers = [
  {
    category: "Faculty Advisors",
    members: [
      {
        name: "Mr. V. Gnanasekar",
        role: "Head of Department, AI&DS",
        image: "/assets/Gnanasekar.jpg" // Replace with actual images
      },
      {
        name: "Mr. R Suganeswaran",
        role: "AP/AI&DS",
        contact: "+91 99940 86870",
        image: "/assets/Suganeswaran.jpg"
      },
      {
        name: "Mr. S. Surendran Subramaniam",
        role: "AP/AI&DS",
        contact: "+91 99425 45833",
        image: "/assets/Surendran.jpg"
      }
    ]
  },
  {
    category: "Student Coordinators",
    members: [
      {
        name: "Mr, V. Moganavel",
        role: "Chairman, Astroz Association",
        contact: "+91 93633 86324",
        image: "/assets/Moganavel.jpg"
      },
      {
        name: "Mr. M.A Harinesh",
        role: "Secretary, Astroz Association",
        contact: "+91 9361943978",
        image: "/assets/Harinesh.jpg"
      },
    ]
  }
];

const Committee = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="committee" className="section-padding bg-dark/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Our <span className="gradient-text">Team</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle"
        >
          Meet the dedicated team behind Cognista 2k25 working tirelessly to make this event a grand success.
        </motion.p>

        {committeeMembers.map((category, categoryIndex) => (
          <div key={category.category} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
              className="text-2xl font-orbitron font-bold mb-8 uppercase tracking-wider text-center"
            >
              {category.category}
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {category.members.map((member, memberIndex) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 + memberIndex * 0.05 }}
                  className="bg-darkBlue/30 backdrop-blur-sm rounded-xl overflow-hidden card-glow"
                >
                  <div className="p-6 flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-accent-cyan to-accent-magenta">
                      {/* Replace with actual member images */}
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{member.name}</h4>
                      <p className="text-accent-cyan">{member.role}</p>
                      <p className="text-accent-cyan">{member.contact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Committee;
