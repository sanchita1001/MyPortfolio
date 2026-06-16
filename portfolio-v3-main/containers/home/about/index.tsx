import React from 'react';
import Title from '@/components/Title';
import InteractiveCard from '@/components/InteractiveCard';
import { aboutMe, skills } from '@/data/index';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="mt-28">
      <Title title="About Me" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 md:mt-24">
        {/* Personal Introduction Card */}
        <InteractiveCard className="p-12 md:p-14 flex flex-col gap-8">
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-primary dark:text-white mb-6">
                Who I Am
              </h3>
              <p className="text-xl text-textPrimary leading-relaxed mb-6">
                {aboutMe.introduction}
              </p>
              <p className="text-xl text-textPrimary leading-relaxed">
                {aboutMe.focus}
              </p>
            </motion.div>
          </div>
        </InteractiveCard>

        {/* Currently Working On Card */}
        <InteractiveCard className="p-12 md:p-14 flex flex-col gap-8">
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-primary dark:text-white mb-6">
                Currently Working On
              </h3>
              <p className="text-xl text-textPrimary leading-relaxed mb-8">
                {aboutMe.currentlyWorking}
              </p>
              
              <div className="flex flex-col gap-4">
                <h4 className="text-2xl font-semibold text-primary dark:text-white">
                  Key Interests
                </h4>
                <ul className="space-y-3 text-lg text-textPrimary">
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🚀</span>
                    Full-Stack Development
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🔐</span>
                    Cybersecurity & CTF Competitions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">💡</span>
                    Scalable Web Applications
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    Technical Community Building
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </InteractiveCard>

        {/* Skills Overview Card - Full Width */}
        <InteractiveCard className="lg:col-span-2 p-12 md:p-14 flex flex-col gap-8">
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-primary dark:text-white mb-8">
                Technical Skills
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-3 p-5 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all bg-primary/5 dark:bg-white/5"
                  >
                    <skill.icon className="w-12 h-12 text-primary dark:text-white" />
                    <span className="text-sm font-medium text-center text-textPrimary dark:text-white">
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
