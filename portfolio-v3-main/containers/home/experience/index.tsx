import React from 'react';
import Title from '@/components/Title';
import InteractiveCard from '@/components/InteractiveCard';
import { workExperience } from '@/data/index';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="mt-28">
      <Title title="Experience" />

      <div className="mt-12 md:mt-24 flex flex-col gap-8">
        {workExperience.map((experience, index) => (
          <InteractiveCard key={index} className="p-12 md:p-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="z-10 space-y-6"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-4xl font-bold text-primary dark:text-white">
                      {experience.Company_name}
                    </h3>
                    {experience.endYear === 'Current' && (
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-2xl text-textPrimary font-medium">
                    {experience.Desc}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <p className="text-lg text-textSecondary font-medium">
                    {experience.startYear} - {experience.endYear}
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

              {/* Responsibilities */}
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-primary dark:text-white">
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 text-lg text-textPrimary"
                    >
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary dark:bg-white mt-2"></span>
                      <span className="flex-grow">{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Timeline indicator */}
              <div className="flex items-center gap-3 pt-4">
                <div className={`w-3 h-3 rounded-full ${
                  experience.endYear === 'Current' 
                    ? 'bg-green-500 animate-pulse' 
                    : 'bg-gray-400'
                }`}></div>
                <div className="h-px flex-grow bg-gradient-to-r from-blue-500/20 to-transparent"></div>
              </div>
            </motion.div>
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
};

export default Experience;
