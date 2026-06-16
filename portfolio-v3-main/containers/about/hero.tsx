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

      <div className="grid grid-cols-1 gap-8 w-full mt-8">
        <div className="p-10 md:p-12 rounded-3xl relative bg-secondary dark:bg-darkBg flex flex-col gap-8">
          <div className="text-[42px] sm:text-6xl lg:text-[7vh] font-bold text-primary dark:text-white">
            <span className="titleFont font-sm">Experience</span>
          </div>

          <div className="flex flex-col gap-8">
            <div className="div flex flex-row justify-between items-center flex-nowrap w-full gap-3">
              <ol className="relative border-s border-gray-200">
                {workExperience?.map((workItem: any, index: number) => (
                  <li className="mb-12 ms-6" key={index}>
                    <div
                      className={`absolute w-4 h-4 ${workItem.endYear && workItem.endYear === 'Current' ? 'bg-gray-500' : 'bg-gray-200'} rounded-full mt-1.5 -start-2 border-2`}
                    ></div>
                    <div className="flex flex-row items-center gap-3">
                      <div className="text-2xl font-medium">
                        {workItem.Company_name}
                      </div>
                      {workItem.endYear && workItem.endYear === 'Current' && (
                        <div className="inline-block uppercase text-base rounded-full px-3 py-1 border border-gray-500 text-gray-500">
                          present
                        </div>
                      )}
                    </div>
                    <div className="mb-4 text-xl font-normal text-textPrimary">
                      {workItem.Desc} - ({workItem.startYear} - {workItem.endYear})
                    </div>
                    <div className="text-lg text-textSecondary mt-3">
                      <ul className="list-disc list-inside space-y-2">
                        <li>Launched the official HACKOWASP 8.0 website using the MERN stack</li>
                        <li>Coordinated technical operations for the XPLOIT CTF platform</li>
                        <li>Managed sponsor outreach, social media promotion, and cybersecurity events</li>
                        <li>Designed UI mockups and digital assets using Figma</li>
                      </ul>
                    </div>
                  </li>
                ))}
                
                <li className="mb-12 ms-6">
                  <div className="absolute w-4 h-4 bg-gray-200 rounded-full mt-1.5 -start-2 border-2"></div>
                  <div className="flex flex-row items-center gap-3">
                    <div className="text-2xl font-medium">
                      Thapar Mathematical Society
                    </div>
                  </div>
                  <div className="mb-4 text-xl font-normal text-textPrimary">
                    Event Management Team Member - (Dec 2024 - Jan 2025)
                  </div>
                  <div className="text-lg text-textSecondary mt-3">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Coordinated logistics for Shoonya 5.0</li>
                      <li>Hosted stage sessions and audience engagement activities</li>
                      <li>Created presentation decks and promotional visuals</li>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
