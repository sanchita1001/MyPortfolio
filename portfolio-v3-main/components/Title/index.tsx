import React from 'react';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="w-full flex-col sm:flex-col md:flex-row lg:flex justify-start items-center mb-8">
      <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-bold text-primary dark:text-white titleFont">
        {title}
      </h1>
      {/* line */}
      <div className="w-full h-[0.5px] bg-black dark:bg-gray-800 mt-3 ml-3"></div>
    </div>
  );
};

export default Title;
