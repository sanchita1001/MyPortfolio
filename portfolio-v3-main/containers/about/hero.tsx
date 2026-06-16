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
      {/* Education Card */}
<div className="p-4 md:p-5 rounded-2xl bg-secondary dark:bg-darkBg flex flex-col gap-3">
  <h2 className="text-xl md:text-2xl font-bold text-primary dark:text-white">
    <span className="titleFont">Education</span>
  </h2>

  <div className="flex flex-col gap-1">
    <h3 className="text-base md:text-lg font-semibold text-primary dark:text-white">
      Thapar Institute of Engineering & Technology
    </h3>

    <p className="text-sm text-textPrimary">
      B.E. Computer Engineering
    </p>

    <p className="text-xs text-textSecondary">
      2024 – 2028 • CGPA 9.04
    </p>
  </div>

  <div>
    <h4 className="text-sm md:text-base font-semibold text-primary dark:text-white mb-2">
      Coursework
    </h4>

    <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs md:text-sm text-textSecondary">
      <span>• DSA</span>
      <span>• OS</span>
      <span>• OOP</span>
      <span>• DBMS</span>
      <span>• CN</span>
      <span>• Discrete Math</span>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default AboutHero;