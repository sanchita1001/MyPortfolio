

'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CustomMarquee from '@/components/Marquee';
import { motion } from 'framer-motion';
import { FiDownloadCloud } from 'react-icons/fi';
import { Meteors } from '@/components/Meteors';
import { skills } from '@/data/index';
import { AnimatedCursor } from '@/components/Cursor';

const Typewriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      if (!isDeleting) {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
        }
      }
    };

    const timeout = setTimeout(handleType, isDeleting ? 70 : 150);
    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text]);

  return (
    <span className="font-bold text-primary titleFont dark:text-white">
      {displayText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
        className="inline-block w-[2px] h-[28px] md:h-[38px] bg-primary dark:bg-white ml-1 align-middle"
      />
    </span>
  );
};

const Hero = () => {
  return (
    <React.Fragment>
     <div id="hero" className="max-w-[1000px] mx-auto w-full relative mt-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 grid-rows-3 gap-0 sm:gap-0 md:gap-5 lg:gap-5 grid-flow-row">
        <motion.div
          transition={{ delay: 0.2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group border border-grey-200 dark:border-[#27272a] col-span-1 lg:col-span-2 bg-secondary rounded-2xl p-4 md:p-5 flex flex-col gap-6 row-span-1 lg:row-span-3 cursor-pointer dark:bg-darkBg relative overflow-hidden"
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
          <div className="absolute inset-[1px] bg-secondary dark:bg-darkBg rounded-[calc(1.5rem-1px)] z-[1] group-hover:inset-[2px] transition-all" />

          <div className="relative z-10 h-full w-full">
            <span className="absolute w-[40%] bottom-0 right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
            <span className="absolute w-px left-0 h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
            <div className="image relative h-[220px] md:h-[280px] w-full ">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20
                }}
                className="absolute top-5 left-5 z-10"
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {' '}
                  <g clipPath="url(#clip0_118_208)">
                    {' '}
                    <path
                      d="M100 200C97.1048 105.262 94.738 102.91 0 100C94.738 97.1048 97.0903 94.738 100 0C102.895 94.738 105.262 97.0903 200 100C105.262 102.91 102.91 105.233 100 200Z"
                      fill="url(#paint0_linear_118_208)"
                    />{' '}
                  </g>{' '}
                  <defs>
                    {' '}
                    <linearGradient
                      id="paint0_linear_118_208"
                      x1="14"
                      y1="26"
                      x2="179"
                      y2="179.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      {' '}
                      <stop stopColor="#ffffff" />{' '}
                      <stop offset="1" stopColor="#F9ECFF" />{' '}
                    </linearGradient>{' '}
                    <clipPath id="clip0_118_208">
                      {' '}
                      <rect width="200" height="200" fill="white" />{' '}
                    </clipPath>{' '}
                  </defs>{' '}
                </svg>
              </motion.div>
              <Image
                loading="lazy"
                src="/profilepic.jpeg"
                alt="Sanchita Jain"
                className="rounded-2xl object-cover "
                fill
              />
            </div>

            <motion.div
              transition={{ duration: 1.5, delay: 0.2 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="title mt-3"
            >
              <h1 className="text-2xl md:text-3xl ">
                <span className="font-medium text-textSecondary titleFont">
                  hey, I'm
                </span>{' '}
                <br />
                <Typewriter text="Sanchita Jain 👋" />
              </h1>
            </motion.div>

            <hr className="my-2" />

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="contact-info flex flex-col gap-2 text-sm md:text-base"
            >
              <div className="flex items-center gap-2 text-textPrimary">
                <span className="text-base">📧</span>
                <a href="mailto:sjain7be24@thapar.edu" className="hover:text-primary transition-colors text-xs md:text-sm">sjain7be24@thapar.edu</a>
              </div>
              <div className="flex items-center gap-2 text-textPrimary">
                <span className="text-base">📱</span>
                <span className="text-xs md:text-sm">+91-7982750061</span>
              </div>
              <div className="flex items-center gap-2 text-textPrimary">
                <span className="text-base">💼</span>
                <a href="https://linkedin.com/in/sanchitajain1001" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xs md:text-sm">LinkedIn Profile</a>
              </div>
              <div className="flex items-center gap-2 text-textPrimary">
                <span className="text-base">💻</span>
                <a href="https://github.com/sanchita1001" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-xs md:text-sm">GitHub Profile</a>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          transition={{ delay: 0.3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-1 lg:col-span-3 border border-grey-200 dark:border-[#27272a] bg-secondary rounded-3xl p-4 md:p-6 flex flex-col row-span-1 lg:row-span-2 mt-3 sm:mt-5 md:mt-0 lg:mt-0 dark:bg-darkBg relative overflow-hidden group"
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
          <div className="absolute inset-[1px] bg-secondary dark:bg-darkBg rounded-[calc(1.5rem-1px)] z-[1] group-hover:inset-[2px] transition-all" />

          <div className="relative z-10 h-full w-full">
            <div className="dvg-group absolute -z-0 left-0 bottom-0 hidden md:flex justify-between w-full opacity-30 ">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1034_10)">
                  <mask id="mask0_1034_10" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
                    <path d="M1.5 1.5H198.5V198.5H1.5V1.5Z" fill="white" stroke="white" strokeWidth="3" />
                  </mask>
                  <g mask="url(#mask0_1034_10)">
                    <path d="M198.5 149.379L151.5 196.379V50V48.5H150H3.62132L50.6213 1.5H198.5V50V149.379ZM61.4457 101.5L1.5 161.446V101.5H61.4457ZM98.5 198.5H39.399L98.5 139.399V198.5Z" stroke="url(#paint0_linear_1034_10)" strokeWidth="3" />
                  </g>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_1034_10" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4B467F" />
                    <stop offset="1" stopColor="#6558F9" />
                  </linearGradient>
                  <clipPath id="clip0_1034_10"><rect width="200" height="200" fill="white" /></clipPath>
                </defs>
              </svg>

              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.52347 1.52347C27.0984 2.31261 47.6874 22.9015 48.4765 48.4765C22.9016 47.6874 2.31261 27.0985 1.52347 1.52347ZM101.523 101.523C127.098 102.313 147.687 122.902 148.477 148.477C122.902 147.687 102.313 127.098 101.523 101.523ZM101.523 198.477C102.313 172.902 122.902 152.313 148.477 151.523C147.687 177.098 127.098 197.687 101.523 198.477ZM198.477 198.477C172.902 197.687 152.313 177.098 151.523 151.523C177.098 152.313 197.687 172.902 198.477 198.477ZM198.477 101.523C197.687 127.098 177.098 147.687 151.523 148.477C152.313 122.902 172.902 102.313 198.477 101.523ZM51.5235 48.4765C52.3126 22.9015 72.9016 2.31261 98.4765 1.52347C97.6874 27.0985 77.0984 47.6874 51.5235 48.4765ZM148.477 48.4765C122.902 47.6874 102.313 27.0985 101.523 1.52347C127.098 2.31262 147.687 22.9015 148.477 48.4765ZM148.477 51.5235C147.687 77.0985 127.098 97.6874 101.523 98.4765C102.313 72.9015 122.902 52.3126 148.477 51.5235ZM51.5235 51.5235C77.0984 52.3126 97.6874 72.9015 98.4765 98.4765C72.9016 97.6874 52.3126 77.0985 51.5235 51.5235ZM1.52347 98.4765C2.31261 72.9015 22.9016 52.3126 48.4765 51.5235C47.6874 77.0985 27.0984 97.6874 1.52347 98.4765ZM48.4765 148.477C22.9016 147.687 2.31262 127.098 1.52347 101.523C27.0984 102.313 47.6874 122.902 48.4765 148.477ZM1.52347 198.477C2.31262 172.902 22.9016 152.313 48.4765 151.523C47.6874 177.098 27.0984 197.687 1.52347 198.477ZM98.4765 198.477C72.9016 197.687 52.3126 177.098 51.5235 151.523C77.0984 152.313 97.6874 172.902 98.4765 198.477ZM51.5235 148.477C52.3126 122.902 72.9016 102.313 98.4765 101.523C97.6874 127.098 77.0984 147.687 51.5235 148.477ZM151.523 48.4765C152.313 22.9015 172.902 2.31262 198.477 1.52347C197.687 27.0985 177.098 47.6874 151.523 48.4765ZM198.477 98.4765C172.902 97.6874 152.313 77.0985 151.523 51.5235C177.098 52.3126 197.687 72.9015 198.477 98.4765Z" stroke="url(#paint0_linear_1035_56)" strokeWidth="3" />
                <defs>
                  <linearGradient id="paint0_linear_1035_56" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4B467F" /><stop offset="1" stopColor="#6558F9" />
                  </linearGradient>
                </defs>
              </svg>

              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1035_68)">
                  <mask id="mask0_1035_68" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
                    <path d="M0.5 0.5H199.5V199.5H0.5V0.5Z" fill="white" stroke="white" />
                  </mask>
                  <g mask="url(#mask0_1035_68)">
                    <path d="M101.5 50V1.5H198.5V50C198.5 76.7858 176.786 98.5 150 98.5C123.214 98.5 101.5 76.7858 101.5 50ZM98.5 50V98.5H50H1.5V1.5H50C76.7858 1.5 98.5 23.2142 98.5 50ZM150 101.5H198.5V198.5H150C123.214 198.5 101.5 176.786 101.5 150V101.5H150ZM98.5 150V198.5H1.5V150C1.5 123.214 23.2142 101.5 50 101.5C76.7858 101.5 98.5 123.214 98.5 150Z" stroke="url(#paint0_linear_1035_68)" strokeWidth="3" />
                  </g>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_1035_68" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4B467F" /><stop offset="1" stopColor="#6558F9" />
                  </linearGradient>
                  <clipPath id="clip0_1035_68"><rect width="200" height="200" fill="white" /></clipPath>
                </defs>
              </svg>
            </div>

            <span className="absolute z-10 w-[40%] bottom-0 right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
            <span className="absolute w-px left-0 h-[20%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

            <div className="relative z-10 h-full w-full flex flex-col gap-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="btn_group flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                 <a
  href="/Resume-Sanchita-Jain_.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="cv"
>
                    <FiDownloadCloud className="text-lg" />
                    Download CV
                  </a>
                  <div className="flex gap-3">
                    <a
                      aria-label="linkedin"
                      href="https://linkedin.com/in/sanchitajain1001"
                      target="_blank"
                      className="p-3 bg-white dark:bg-white/10 rounded-2xl shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 text-[#0077B5] fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-4 1.239-4 4v14c0 2.761 1.239 4 4 4h14c2.762 0 4-1.239 4-4v-14c0-2.761-1.238-4-4-4zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a
                      aria-label="github"
                      href="https://github.com/sanchita1001"
                      target="_blank"
                      className="p-3 bg-white dark:bg-white/10 rounded-2xl shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 text-black dark:text-white fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 3.533 1.305 4.399.997.108-.775.441-1.305.807-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>
                <AnimatedCursor text="Hi" classNameDiv="relative md:static" />
              </div>

              <div className="flex flex-col gap-3 mt-auto h-[100px]">
                <p className="text-lg md:text-2xl lg:text-3xl font-bold text-primary dark:text-white leading-tight">
                  Computer Engineering Student
                  <br />
                  <span className="text-textSecondary">Full-Stack Developer</span>
                </p>
              </div>
            </div>
            <Meteors number={30} />
          </div>
        </motion.div>

        <motion.div
          transition={{ delay: 0.4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex md:flex bg-secondary dark:bg-darkBg relative group cursor-pointer col-span-1 lg:col-span-3 rounded-3xl p-0 flex-col row-span-1 mt-3 sm:mt-3 md:mt-0 lg:mt-0 h-[220px] md:h-[250px] lg:h-auto overflow-hidden"
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
          <div className="absolute inset-[1px] bg-secondary dark:bg-darkBg rounded-[calc(1.5rem-1px)] z-[1] group-hover:inset-[2px] transition-all" />

          <div className="relative z-10 w-full flex flex-col h-full">
            <div className="w-full flex items-start p-4 md:p-6">
              <h1 className="text-xl md:text-2xl font-medium">Tools and Tech I daily use</h1>
            </div>

            <div className="flex-grow flex flex-col justify-center gap-3">
              <CustomMarquee direction="right">
                <div className="flex gap-6 last:ml-6">
                  {skills.slice(0, 6).map((skill, index) => (
                    <div key={index} className="p-3 rounded-xl border border-opacity-20 border-blue-500/40"><skill.icon className="w-10 h-10 opacity-50" /></div>
                  ))}
                </div>
              </CustomMarquee>
              <CustomMarquee direction="left">
                <div className="flex gap-6 last:ml-6">
                  {skills.slice(6, 12).map((skill, index) => (
                    <div key={index} className="p-5 rounded-xl border border-opacity-20 border-blue-500/40 "><skill.icon className="w-14 h-14 opacity-50" /></div>
                  ))}
                </div>
              </CustomMarquee>
            </div>
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
