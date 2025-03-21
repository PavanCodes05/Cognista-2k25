"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { inView, motion } from 'framer-motion';

const calculateTimeLeft = () => {
  const eventDate = new Date('March 29, 2025 10:00:00').getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  return timeLeft;
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <section className="relative min-h-screen flex items-center bg-cover bg-center">
      <div className="container mx-auto px-4 pt-24 pb-16 text-center text-white">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          The <span className="text-accent-cyan">Cognista</span> 2k25
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          A National Level AI & DS Symposium
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl mb-12 max-w-3xl mx-auto"
        >
          Join us to explore the frontiers of Artificial Intelligence, Machine Learning, 
          and Data Science with industry experts, workshop, and exciting competitions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Link href="#events" className="btn-primary">
            Register Now
          </Link>
          <Link href="#about" className="py-3 px-6 rounded-lg border-2 border-white/20 font-orbitron font-bold tracking-wider transition-all duration-300 hover:border-accent-cyan hover:text-accent-cyan">
            Learn More
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg font-orbitron mb-4">Event Starts In</p>
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            <div className="bg-darkBlue/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl md:text-5xl font-orbitron font-bold mb-1">{timeLeft.days}</div>
              <div className="text-sm uppercase text-gray-300">Days</div>
            </div>
            <div className="bg-darkBlue/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl md:text-5xl font-orbitron font-bold mb-1">{timeLeft.hours}</div>
              <div className="text-sm uppercase text-gray-300">Hours</div>
            </div>
            <div className="bg-darkBlue/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl md:text-5xl font-orbitron font-bold mb-1">{timeLeft.minutes}</div>
              <div className="text-sm uppercase text-gray-300">Minutes</div>
            </div>
            <div className="bg-darkBlue/50 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl md:text-5xl font-orbitron font-bold mb-1">{timeLeft.seconds}</div>
              <div className="text-sm uppercase text-gray-300">Seconds</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

