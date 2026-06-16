import React from 'react';


const AboutHero = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 w-full">
        <div className="p-5 md:p-8 lg:p-10 xl:p-12 rounded-2xl md:rounded-3xl relative bg-secondary dark:bg-darkBg flex flex-col gap-4 md:gap-6 lg:gap-8">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] xl:text-[7vh] font-bold text-primary dark:text-white">
            <span className="titleFont font-sm">About me</span>
          </div>
          <div className="text-sm md:text-base lg:text-lg xl:text-2xl text-left text-textPrimary leading-relaxed">
            I'm a Computer Engineering undergraduate at Thapar Institute of Engineering & Technology with a CGPA of 9.04. 
            I'm passionate about full-stack development, cybersecurity, and building scalable web applications. 
            I have experience developing MERN stack solutions, organizing cybersecurity competitions, and contributing to 
            technical communities through OWASP and student-led initiatives. I love learning new technologies and solving 
            complex problems through code.
          </div>
        </div>
        
        <div className="p-5 md:p-8 lg:p-10 xl:p-12 rounded-2xl md:rounded-3xl relative bg-secondary dark:bg-darkBg flex flex-col gap-4 md:gap-6 lg:gap-8">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] xl:text-[7vh] font-bold text-primary dark:text-white">
            <span className="titleFont font-sm">Education</span>
          </div>
          <div className="text-sm md:text-base lg:text-lg xl:text-2xl text-left text-textPrimary">
            <div className="mb-4 md:mb-5 lg:mb-6">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-primary dark:text-white">
                Thapar Institute of Engineering & Technology
              </h3>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl mt-2">Bachelor of Engineering in Computer Engineering</p>
              <p className="text-xs md:text-sm lg:text-base xl:text-lg text-textSecondary mt-1 md:mt-2">Aug 2024 – May 2028 • CGPA: 9.04</p>
            </div>
            
            <div className="mt-5 md:mt-6 lg:mt-8">
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary dark:text-white mb-2 md:mb-3 lg:mb-4">
                Relevant Coursework
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 md:gap-2 lg:gap-3 text-xs md:text-sm lg:text-base xl:text-lg">
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
