import React from 'react';
import { workExperience } from '@/data/index';

const AboutHero = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <div className="p-10 md:p-12 rounded-3xl relative bg-secondary dark:bg-darkBg flex flex-col gap-8">
          <div className="text-[42px] lg:text-[7vh] font-bold text-primary dark:text-white">
            <span className="titleFont font-sm">About me</span>
          </div>
          <div className="text-2xl text-left text-textPrimary leading-relaxed">
            I'm a Computer Engineering undergraduate at Thapar Institute of Engineering & Technology with a CGPA of 9.04. 
            I'm passionate about full-stack development, cybersecurity, and building scalable web applications. 
            I have experience developing MERN stack solutions, organizing cybersecurity competitions, and contributing to 
            technical communities through OWASP and student-led initiatives. I love learning new technologies and solving 
            complex problems through code.
          </div>
        </div>
        
        <div className="p-10 md:p-12 rounded-3xl relative bg-secondary dark:bg-darkBg flex flex-col gap-8">
          <div className="text-[42px] lg:text-[7vh] font-bold text-primary dark:text-white">
            <span className="titleFont font-sm">Education</span>
          </div>
          <div className="text-2xl text-left text-textPrimary">
            <div className="mb-6">
              <h3 className="text-3xl font-semibold text-primary dark:text-white">
                Thapar Institute of Engineering & Technology
              </h3>
              <p className="text-xl mt-3">Bachelor of Engineering in Computer Engineering</p>
              <p className="text-lg text-textSecondary mt-2">Aug 2024 – May 2028 • CGPA: 9.04</p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-primary dark:text-white mb-4">
                Relevant Coursework
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg">
                <span className="text-textSecondary">• Data Structures & Algorithms</span>
                <span className="text-textSecondary">• Operating Systems</span>
                <span className="text-textSecondary">• OOP</span>
                <span className="text-textSecondary">• Database Management</span>
                <span className="text-textSecondary">• Computer Networks</span>
                <span className="text-textSecondary">• Discrete Mathematics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default AboutHero;
