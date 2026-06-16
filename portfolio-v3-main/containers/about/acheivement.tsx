'use client';

import React from 'react';
import Title from '@/components/Title';
import { achievements } from '@/data/index';
import { motion, useMotionValue, useMotionTemplate, MotionValue } from 'framer-motion';

interface EffectProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

function CursorEffect({ mouseX, mouseY }: EffectProps) {
  const maskImage = useMotionTemplate`
    radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)
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

const Achievement = () => {
  return (
    <section id="achievements" className="mt-16 md:mt-20">
      <Title title="Achievements" />

      <div className="mt-8 md:mt-10 flex flex-col gap-4 md:gap-6">
        {achievements?.map((achievement: any, index: number) => {
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
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onMouseMove={onMouseMove}
              className="group relative border border-grey-200 dark:border-[#27272a] bg-secondary dark:bg-darkBg rounded-2xl p-5 md:p-6 lg:p-8 overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:border-primary/30 dark:hover:border-primary/30"
            >
              {/* Animated Border on Hover */}
              <div className="absolute inset-[-2px] rounded-[inherit] z-0 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, #7043EC 90deg, transparent 180deg, #7043EC 270deg, transparent 360deg)',
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Inner Card Layer */}
              <div className="absolute inset-[1px] z-[1] rounded-[calc(1rem-1px)] bg-secondary transition-all pointer-events-none group-hover:inset-[2px] dark:bg-darkBg" />

              {/* Cursor Effect - Mouse Tracking Gradient */}
              <CursorEffect mouseX={mouseX} mouseY={mouseY} />

              {/* Decorative Lines */}
              <span className="absolute w-[40%] bottom-0 right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0 z-10" />
              <span className="absolute w-px left-0 h-[30%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0 z-10" />

              {/* Trophy Icon Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                }}
                viewport={{ once: true }}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-3xl md:text-4xl opacity-20 group-hover:opacity-40 transition-opacity z-10"
              >
                🏆
              </motion.div>

              {/* Content */}
              <div className="flex flex-col gap-2 md:gap-3 relative z-10">
                <motion.div
                  className="flex items-start justify-between gap-4"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary dark:text-white group-hover:text-[#7043EC] dark:group-hover:text-[#7043EC] transition-colors">
                    {achievement?.name}
                  </h3>
                </motion.div>

                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400 leading-relaxed pr-8 md:pr-12"
                >
                  {achievement?.desc}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievement;