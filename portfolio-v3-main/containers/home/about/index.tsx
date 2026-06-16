import React from 'react';
import Title from '@/components/Title';
import InteractiveCard from '@/components/InteractiveCard';
import { aboutMe, skills } from '@/data/index';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="mt-16 md:mt-20">
      <div className="z-10">
        <Title title="About Me" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 md:mt-10">
        {/* Personal Introduction Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <InteractiveCard className="p-5 md:p-6 flex flex-col gap-4">
            <div className="z-10">
              <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white mb-3">
                Who I Am
              </h3>

              <p className="text-sm md:text-base text-textPrimary leading-7 mb-4">
                {aboutMe.introduction}
              </p>

              <p className="text-sm md:text-base text-textPrimary leading-7">
                {aboutMe.focus}
              </p>
            </div>
          </InteractiveCard>
        </motion.div>

        {/* Currently Working On Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <InteractiveCard className="p-5 md:p-6 flex flex-col gap-4">
            <div className="z-10">
              <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white mb-3">
                Currently Working On
              </h3>

              <p className="text-sm md:text-base text-textPrimary leading-7 mb-4">
                {aboutMe.currentlyWorking}
              </p>

              <div className="flex flex-col gap-2">
                <h4 className="text-base md:text-lg font-semibold text-primary dark:text-white">
                  Key Interests
                </h4>

                <ul className="space-y-2 text-sm md:text-base text-textPrimary">
                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-base">🚀</span>
                    Full-Stack Development
                  </motion.li>

                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-base">🔐</span>
                    Cybersecurity & CTF Competitions
                  </motion.li>

                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-base">💡</span>
                    Scalable Web Applications
                  </motion.li>

                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-base">🎯</span>
                    Technical Community Building
                  </motion.li>
                </ul>
              </div>
            </div>
          </InteractiveCard>
        </motion.div>

        {/* Skills Overview */}
        <InteractiveCard className="lg:col-span-2 p-5 md:p-6 flex flex-col gap-4">
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white mb-4">
                Technical Skills
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.03,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all bg-primary/5 dark:bg-white/5"
                  >
                    <skill.icon className="w-8 h-8 md:w-10 md:h-10 text-primary dark:text-white" />

                    <span className="text-xs md:text-sm font-medium text-center text-textPrimary dark:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </InteractiveCard>
      </div>
    </section>
  );
};

export default About;