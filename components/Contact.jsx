"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section-padding bg-dark/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          Contact <span className="gradient-text">Us</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-subtitle text-center"
        >
          Have questions? Reach out to us and we'll be happy to assist you.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-darkBlue/30 backdrop-blur-sm rounded-xl p-8 h-full">
              <h3 className="font-orbitron text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-accent-cyan mt-1">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-300">astroz.aids@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-accent-cyan mt-1">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-300">+91 93633 86324</p>
                    {/* <p className="text-gray-300">+91 9876543211</p> */}
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-accent-cyan mt-1">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-gray-300">
                      Admin Block,<br />
                      Dhirajlal Gandhi College Of Technology,<br />
                      Opposite Salem Airport,<br />
                      Salem, Tamil Nadu 636309
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/astroz_ai/" className="text-gray-300 hover:text-accent-cyan transition-colors duration-300">
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Registration Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            id="register"
          >
            <div className="bg-darkBlue/30 backdrop-blur-sm rounded-xl p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-6">Register Now</h3>
              <p className="text-gray-300 mb-6">
                Fill out the form below to register for Cognista 2k25. 
                We'll get back to you with confirmation and more details.
              </p>
              
              {/* Google Form Embed Placeholder */}
              <div className="bg-darkBlue/50 rounded-lg p-4 text-center h-64 flex items-center justify-center">
                <div>
                  <a 
                    href="#events"
                    rel="noopener noreferrer" 
                    className="btn-primary inline-block"
                  >
                    Register Now
                  </a>
                </div>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                * By registering, you agree to our terms and conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
