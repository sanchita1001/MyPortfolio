import React from 'react';
import Title from '@/components/Title';
import InteractiveCard from '@/components/InteractiveCard';
import { education } from '@/data/index';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="mt-28">
      <Title title="Education" />

      <div className="mt-12 md:mt-24">
        <InteractiveCard className="p-12 md:p-14 flex flex-col gap-8">
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-grow">
                  <h3 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
                    {education.institution}
                  </h3>
                  <p className="text-2xl text-textPrimary font-medium">
                    {education.degree}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 dark:bg-white/10 border border-primary/20 dark:border-white/20">
                    <span className="text-2xl">🎓</span>
                    <span className="text-xl font-bold text-primary dark:text-white">
                      CGPA: {education.cgpa}
                    </span>
                  </div>
                  <p className="text-lg text-textSecondary mt-2">
                    {education.duration}
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

              {/* Coursework */}
              <div>
                <h4 className="text-3xl font-semibold text-primary dark:text-white mb-6">
                  Relevant Coursework
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {education.coursework.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-lg text-textPrimary"
                    >
                      <span className="text-primary dark:text-white text-xl">•</span>
                      <span>{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Timeline Visual */}
              <div className="relative pt-8">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary dark:bg-white"></div>
                  <div className="h-px flex-grow bg-gradient-to-r from-primary/40 to-transparent dark:from-white/40"></div>
                  <div className="flex gap-8 text-lg text-textSecondary">
                    <span className="font-medium">Started: Aug 2024</span>
                    <span className="font-medium">Expected: May 2028</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </InteractiveCard>
      </div>
    </section>
  );
};

export default Education;
