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
  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white via-gray-50 to-white opacity-0 transition duration-300 group-hover:opacity-10"
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
      className="group relative min-h-[520px] cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-cream dark:border-[#27272a] dark:bg-darkBg"
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
      <div className="absolute inset-[1px] z-[1] rounded-[calc(1.5rem-1px)] bg-cream transition-all pointer-events-none group-hover:inset-[2px] dark:bg-darkBg" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col p-14 pointer-events-none">
        <div className="pointer-events-auto flex h-full flex-col gap-8">
          {/* Decorative Lines */}
          <span className="absolute bottom-0 right-px h-px w-[40%] bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />

          <span className="absolute left-0 h-[40%] w-px bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />

          <Effect mouseX={mouseX} mouseY={mouseY} />

          {/* Header */}
          <div className="flex flex-1 flex-col gap-7">
            <div className="flex items-start justify-between gap-5">
              <div className="flex flex-grow flex-col gap-3">
                <h1 className="text-2xl font-bold text-primary dark:text-white">
                  {title}
                </h1>
              </div>

              <div className="flex flex-shrink-0 gap-4">
                {link && (
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Project"
                  >
                    <BsArrowUpRightCircle className="text-2xl text-textPrimary transition-colors md:text-3xl group-hover:text-primary dark:group-hover:text-white" />
                  </Link>
                )}

                {github && (
                  <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub className="text-2xl text-textPrimary transition-colors md:text-3xl group-hover:text-primary dark:group-hover:text-white" />
                  </Link>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-base font-medium leading-relaxed text-textPrimary">
              {description}
            </p>

            {/* Tech Stack */}
            {tech?.length ? (
              <div className="mt-auto flex flex-wrap gap-3">
                {tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary dark:border-white/20 dark:bg-white/10 dark:text-white"
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