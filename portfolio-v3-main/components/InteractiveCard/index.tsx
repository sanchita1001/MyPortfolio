import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

function CardEffect({ mouseX, mouseY }: any) {
  let maskImage = useMotionTemplate`
  radial-gradient(400px at ${mouseX}px ${mouseY}px,
    white,
    transparent
  )
`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"></div>
      <motion.div
  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 transition duration-300 group-hover:opacity-100"
  style={style}
/>
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      ></motion.div>
    </div>
  );
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ children, className = '' }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className={`group cursor-pointer border border-grey-200 dark:border-[#27272a] bg-cream rounded-3xl dark:bg-darkBg relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-[-2px] rounded-[inherit] z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background: "conic-gradient(from 0deg, transparent 0deg, #7043EC 90deg, transparent 180deg, #7043EC 270deg, transparent 360deg)",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
      <div className="absolute inset-[1px] bg-cream dark:bg-darkBg rounded-[calc(1.5rem-1px)] z-[2] group-hover:inset-[2px] transition-all pointer-events-none" />
      
      <div className=" z-[3] h-full w-full pointer-events-none">
        <div className="pointer-events-auto h-full w-full">
          <span className="absolute w-[40%] bottom-0 right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
          <span className="absolute w-px left-0 h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
          <CardEffect mouseX={mouseX} mouseY={mouseY} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;
