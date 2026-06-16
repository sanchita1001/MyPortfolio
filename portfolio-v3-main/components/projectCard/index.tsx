import React, { useState, MouseEvent, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  image: any;
  link: string;
  github: string;
  category?: string;
  tech?: string[];
}

function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

function Effect({ mouseX, mouseY, ...gridProps }: any) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      ></motion.div>
    </div>
  );
}

const ProjectCard = ({
  title,
  description,
  image,
  link,
  github,
  category,
  tech
}: ProjectCardProps) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const data = {
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3]
      ]
    }
  };

  return (
    <div
      onMouseMove={onMouseMove}
      className=" group cursor-pointer border border-grey-200 dark:border-[#27272a] bg-secondary rounded-3xl min-h-[520px] p-14 flex flex-col gap-8 dark:bg-darkBg relative"
    >
      <span className="absolute w-[40%] bottom-0 right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
      <span className="absolute w-px left-0 h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
      <Effect {...data.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="header flex flex-col gap-7 z-10 flex-grow">
        <div className="title-section flex flex-row justify-between items-start gap-5">
          <div className="title flex flex-col gap-3 flex-grow">
            <h1 className="text-4xl font-bold text-primary dark:text-white">
              {title}
            </h1>
          </div>
          <div className="icons flex gap-4 flex-shrink-0">
            {link && (
              <Link href={`${link}`} aria-label="up" target="_blank" rel="noopener noreferrer">
                <BsArrowUpRightCircle className="text-4xl md:text-5xl text-textPrimary group-hover:text-primary dark:group-hover:text-white" />
              </Link>
            )}

            {github && (
              <Link aria-label="github" href={`${github}`} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-4xl md:text-5xl text-textPrimary group-hover:text-primary dark:group-hover:text-white" />
              </Link>
            )}
          </div>
        </div>

        <p className="text-textPrimary font-medium text-xl leading-relaxed">{description}</p>

        {tech && tech.length > 0 && (
          <div className="tech-stack flex flex-wrap gap-3 mt-auto">
            {tech.map((technology, index) => (
              <span
                key={index}
                className="px-5 py-2 text-base font-medium rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white border border-primary/20 dark:border-white/20"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
        
        <div className="line w-full h-[1px] bg-textPrimary opacity-10 mt-2"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
