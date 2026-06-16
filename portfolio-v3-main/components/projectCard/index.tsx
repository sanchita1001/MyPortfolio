'use client';

import React from 'react';
import Link from 'next/link';
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string | null;
  github?: string | null;
  tech?: string[];
}

interface EffectProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

function Effect({ mouseX, mouseY }: EffectProps) {
  const maskImage = useMotionTemplate`
    radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)
  `;

  const style = {
    maskImage,
    WebkitMaskImage: maskImage,
  };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50" />

      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />

      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      />
    </div>
  );
}

const ProjectCard = ({
  title,
  description,
  link,
  github,
  tech,
}: ProjectCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      onMouseMove={onMouseMove}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative min-h-[320px] md:min-h-[420px] lg:min-h-[520px] cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl border border-gray-200 bg-secondary dark:border-[#27272a] dark:bg-darkBg"
    >
      {/* Animated Border */}
      <div className="absolute inset-[-2px] z-0 overflow-hidden rounded-[inherit] pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0deg, #7043EC 90deg, transparent 180deg, #7043EC 270deg, transparent 360deg)',
          }}
          className="absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      {/* Inner Card Layer */}
      <div className="absolute inset-[1px] z-[1] rounded-[calc(1.5rem-1px)] bg-secondary transition-all pointer-events-none group-hover:inset-[2px] dark:bg-darkBg" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col p-5 md:p-8 lg:p-12 xl:p-14 pointer-events-none">
        <div className="pointer-events-auto flex h-full flex-col gap-4 md:gap-6 lg:gap-8">
          {/* Decorative Lines */}
          <span className="absolute bottom-0 right-px h-px w-[40%] bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />

          <span className="absolute left-0 h-[40%] w-px bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />

          <Effect mouseX={mouseX} mouseY={mouseY} />

          {/* Header */}
          <div className="flex flex-1 flex-col gap-3 md:gap-5 lg:gap-7">
            <div className="flex items-start justify-between gap-2 md:gap-4 lg:gap-5">
              <div className="flex flex-grow flex-col gap-2 md:gap-3">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary dark:text-white">
                  {title}
                </h1>
              </div>

              <div className="flex flex-shrink-0 gap-2 md:gap-3 lg:gap-4">
                {link && (
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Project"
                  >
                    <BsArrowUpRightCircle className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-textPrimary transition-colors group-hover:text-primary dark:group-hover:text-white" />
                  </Link>
                )}

                {github && (
                  <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-textPrimary transition-colors group-hover:text-primary dark:group-hover:text-white" />
                  </Link>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg xl:text-2xl font-medium leading-relaxed text-textPrimary">
              {description}
            </p>

            {/* Tech Stack */}
            {tech?.length ? (
              <div className="mt-auto flex flex-wrap gap-2 md:gap-3">
                {tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 md:px-4 md:py-1.5 lg:px-5 lg:py-2 text-xs md:text-sm lg:text-base font-medium text-primary dark:border-white/20 dark:bg-white/10 dark:text-white"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            ) : null}

            {/* Bottom Divider */}
            <div className="mt-2 h-px w-full bg-textPrimary opacity-10" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;