import React from 'react';

const AboutHero = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">

        {/* About Me Card */}
        <div className="p-5 md:p-6 rounded-2xl bg-secondary dark:bg-darkBg flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white">
            <span className="titleFont">About Me</span>
          </h2>

          <p className="text-sm md:text-base text-textPrimary leading-relaxed">
            I'm a Computer Engineering undergraduate at Thapar Institute of
            Engineering & Technology with a CGPA of 9.04. I'm passionate about
            full-stack development, cybersecurity, and building scalable web
            applications.

            <br />
            <br />

            I have experience developing MERN stack solutions, organizing
            cybersecurity competitions, and contributing to technical
            communities through OWASP and student-led initiatives. I enjoy
            learning new technologies and solving real-world problems through
            code.
          </p>
        </div>

        {/* Education Card */}
        <div className="p-5 md:p-6 rounded-2xl bg-secondary dark:bg-darkBg flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white">
            <span className="titleFont">Education</span>
          </h2>

          <div>
            <h3 className="text-lg md:text-xl font-semibold text-primary dark:text-white">
              Thapar Institute of Engineering & Technology
            </h3>

            <p className="text-sm md:text-base mt-1 text-textPrimary">
              Bachelor of Engineering in Computer Engineering
            </p>

            <p className="text-xs md:text-sm text-textSecondary mt-1">
              Aug 2024 – May 2028 • CGPA: 9.04
            </p>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold text-primary dark:text-white mb-2">
              Relevant Coursework
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
              <span className="text-textSecondary">
                • Data Structures & Algorithms
              </span>

              <span className="text-textSecondary">
                • Operating Systems
              </span>

              <span className="text-textSecondary">
                • Object-Oriented Programming
              </span>

              <span className="text-textSecondary">
                • Database Management
              </span>

              <span className="text-textSecondary">
                • Computer Networks
              </span>

              <span className="text-textSecondary">
                • Discrete Mathematics
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutHero;