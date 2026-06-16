import React from 'react';
import Image from 'next/image';
import CustomMarquee from '@/components/Marquee';
import MyImg from '@/assets/images/ascii.png';
import { motion } from 'framer-motion';
import { FiDownloadCloud } from 'react-icons/fi';
import { Meteors } from '@/components/Meteors';
import { skills } from '@/data/index';
import { AnimatedCursor } from '@/components/Cursor';

const Hero = () => {
  return (
    <React.Fragment>
     <div id="hero" className="max-w-[1800px] mx-auto w-full relative mt-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 grid-rows-3 gap-0 sm:gap-0 md:gap-8 lg:gap-8 grid-flow-row">
        <motion.div
          transition={{ delay: 0.2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group border border-grey-200 dark:border-[#27272a] col-span-2 bg-secondary rounded-3xl p-12 flex flex-col gap-8 row-span-3 cursor-pointer dark:bg-darkBg relative"
        >
          <span className="absolute w-[40%] bottom-0 right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
          <span className="absolute w-px left-0 h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
          <div className="image relative h-[550px] w-full ">
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
                width="100"
                height="100"
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
              src={MyImg}
              alt="Sanchita Jain"
              placeholder="blur"
              className="rounded-2xl object-cover "
              fill
            />
          </div>

          <motion.div
            transition={{ duration: 1.5, delay: 0.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="title mt-5"
          >
            <h1 className="text-6xl ">
              <span className="font-medium text-textSecondary titleFont">
                hey, I'm
              </span>{' '}
              <br />
              <span className="font-bold text-primary  titleFont dark:text-white">
                Sanchita Jain 👋
              </span>
            </h1>
          </motion.div>

          <hr />

          <div className="contact-info flex flex-col gap-4 text-lg">
            <div className="flex items-center gap-3 text-textPrimary">
              <span className="text-xl">📧</span>
              <a href="mailto:sjain7be24@thapar.edu" className="hover:text-primary transition-colors">sjain7be24@thapar.edu</a>
            </div>
            <div className="flex items-center gap-3 text-textPrimary">
              <span className="text-xl">📱</span>
              <span>+91-7982750061</span>
            </div>
            <div className="flex items-center gap-3 text-textPrimary">
              <span className="text-xl">💼</span>
              <a href="https://linkedin.com/in/sanchitajain1001" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn Profile</a>
            </div>
            <div className="flex items-center gap-3 text-textPrimary">
              <span className="text-xl">💻</span>
              <a href="https://github.com/sanchita1001" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub Profile</a>
            </div>
          </div>
        </motion.div>
        <motion.div
          transition={{ delay: 0.3 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-3 border border-grey-200 dark:border-[#27272a] bg-secondary rounded-3xl p-12 flex flex-col row-span-2 mt-5 sm:mt-5 md:mt-0 lg:mt-0 dark:bg-darkBg relative overflow-hidden"
        >
          <div className="dvg-group absolute -z-0 left-0 bottom-0 hidden md:flex justify-between w-full opacity-30 ">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1034_10)">
                <mask
                  id="mask0_1034_10"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="200"
                  height="200"
                >
                  <path
                    d="M1.5 1.5H198.5V198.5H1.5V1.5Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="3"
                  />
                </mask>
                <g mask="url(#mask0_1034_10)">
                  <path
                    d="M198.5 149.379L151.5 196.379V50V48.5H150H3.62132L50.6213 1.5H198.5V50V149.379ZM61.4457 101.5L1.5 161.446V101.5H61.4457ZM98.5 198.5H39.399L98.5 139.399V198.5Z"
                    stroke="url(#paint0_linear_1034_10)"
                    strokeWidth="3"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1034_10"
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4B467F" />
                  <stop offset="1" stopColor="#6558F9" />
                </linearGradient>
                <clipPath id="clip0_1034_10">
                  <rect width="200" height="200" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.52347 1.52347C27.0984 2.31261 47.6874 22.9015 48.4765 48.4765C22.9016 47.6874 2.31261 27.0985 1.52347 1.52347ZM101.523 101.523C127.098 102.313 147.687 122.902 148.477 148.477C122.902 147.687 102.313 127.098 101.523 101.523ZM101.523 198.477C102.313 172.902 122.902 152.313 148.477 151.523C147.687 177.098 127.098 197.687 101.523 198.477ZM198.477 198.477C172.902 197.687 152.313 177.098 151.523 151.523C177.098 152.313 197.687 172.902 198.477 198.477ZM198.477 101.523C197.687 127.098 177.098 147.687 151.523 148.477C152.313 122.902 172.902 102.313 198.477 101.523ZM51.5235 48.4765C52.3126 22.9015 72.9016 2.31261 98.4765 1.52347C97.6874 27.0985 77.0984 47.6874 51.5235 48.4765ZM148.477 48.4765C122.902 47.6874 102.313 27.0985 101.523 1.52347C127.098 2.31262 147.687 22.9015 148.477 48.4765ZM148.477 51.5235C147.687 77.0985 127.098 97.6874 101.523 98.4765C102.313 72.9015 122.902 52.3126 148.477 51.5235ZM51.5235 51.5235C77.0984 52.3126 97.6874 72.9015 98.4765 98.4765C72.9016 97.6874 52.3126 77.0985 51.5235 51.5235ZM1.52347 98.4765C2.31261 72.9015 22.9016 52.3126 48.4765 51.5235C47.6874 77.0985 27.0984 97.6874 1.52347 98.4765ZM48.4765 148.477C22.9016 147.687 2.31262 127.098 1.52347 101.523C27.0984 102.313 47.6874 122.902 48.4765 148.477ZM1.52347 198.477C2.31262 172.902 22.9016 152.313 48.4765 151.523C47.6874 177.098 27.0984 197.687 1.52347 198.477ZM98.4765 198.477C72.9016 197.687 52.3126 177.098 51.5235 151.523C77.0984 152.313 97.6874 172.902 98.4765 198.477ZM51.5235 148.477C52.3126 122.902 72.9016 102.313 98.4765 101.523C97.6874 127.098 77.0984 147.687 51.5235 148.477ZM151.523 48.4765C152.313 22.9015 172.902 2.31262 198.477 1.52347C197.687 27.0985 177.098 47.6874 151.523 48.4765ZM198.477 98.4765C172.902 97.6874 152.313 77.0985 151.523 51.5235C177.098 52.3126 197.687 72.9015 198.477 98.4765Z"
                stroke="url(#paint0_linear_1035_56)"
                strokeWidth="3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1035_56"
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4B467F" />
                  <stop offset="1" stopColor="#6558F9" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1035_68)">
                <mask
                  id="mask0_1035_68"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="200"
                  height="200"
                >
                  <path
                    d="M0.5 0.5H199.5V199.5H0.5V0.5Z"
                    fill="white"
                    stroke="white"
                  />
                </mask>
                <g mask="url(#mask0_1035_68)">
                  <path
                    d="M101.5 50V1.5H198.5V50C198.5 76.7858 176.786 98.5 150 98.5C123.214 98.5 101.5 76.7858 101.5 50ZM98.5 50V98.5H50H1.5V1.5H50C76.7858 1.5 98.5 23.2142 98.5 50ZM150 101.5H198.5V198.5H150C123.214 198.5 101.5 176.786 101.5 150V101.5H150ZM98.5 150V198.5H1.5V150C1.5 123.214 23.2142 101.5 50 101.5C76.7858 101.5 98.5 123.214 98.5 150Z"
                    stroke="url(#paint0_linear_1035_68)"
                    strokeWidth="3"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1035_68"
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4B467F" />
                  <stop offset="1" stopColor="#6558F9" />
                </linearGradient>
                <clipPath id="clip0_1035_68">
                  <rect width="200" height="200" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <span className="absolute z-10 w-[40%] bottom-0 right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
          <span className="absolute w-px left-0 h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

          <div className="content z-10 flex flex-col gap-8 h-full justify-between ">
            <AnimatedCursor
              text="Hi"
              classNameDiv="justify-end absolute bottom-40 right-10 md:right-10 sm:left-10"
            />
            <p className="text-primary font-bold text-4xl md:text-5xl lg:text-6xl dark:text-white leading-relaxed">
              Computer Engineering Student {''}
             <div className='mt-5'><span className="text-textSecondary">Full-Stack Developer</span></div> 
            </p>
            <div className="btn_group flex flex-col md:flex-row lg:flex-row gap-6 md:gap-6">
              <a
                aria-label="download cv"
                href="https://drive.google.com/drive/folders/191j6y4c-BGXbQJD_Lp5nZW7JnGIe2NDS?usp=sharing"
                target="_blank"
                className="cv shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)] bg-primary text-white font-bold flex items-center justify-center px-8 py-5 md:py-4 lg:py-4 rounded-xl gap-4 dark:bg-secondary dark:text-primary text-xl hover:scale-105 transition-transform"
              >
                <FiDownloadCloud className="text-2xl" />
                Download CV
              </a>
              <a
                aria-label="linkedin"
                href="https://linkedin.com/in/sanchitajain1001"
                target="_blank"
                className="cv shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)] bg-primary text-white font-bold flex items-center justify-center px-8 py-5 md:py-4 lg:py-4 rounded-xl gap-4 dark:bg-secondary dark:text-primary text-xl hover:scale-105 transition-transform"
              >
                LinkedIn
              </a>
              <a
                aria-label="github"
                href="https://github.com/sanchita1001"
                target="_blank"
                className="cv shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)] bg-primary text-white font-bold flex items-center justify-center px-8 py-5 md:py-4 lg:py-4 rounded-xl gap-4 dark:bg-secondary dark:text-primary text-xl hover:scale-105 transition-transform"
              >
                GitHub
              </a>
            </div>
          </div>

          <Meteors number={10} />
        </motion.div>

        <motion.div
          transition={{ delay: 0.4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex md:flex bg-secondary dark:bg-darkBg relative group cursor-pointer col-span-3 rounded-3xl p-0 flex-col row-span-1 mt-5 sm:mt-5 md:mt-0 lg:mt-0 h-[420px] md:h-[420px] lg:h-auto"
        >
          <div className="w-full flex items-start p-8">
            <h1 className="text-3xl md:text-4xl font-medium">Tools and Tech I daily use</h1>
          </div>

          <div>
            <CustomMarquee direction="right">
              <div className="flex gap-6 last:ml-6">
                {skills.slice(0, 6).map((skill, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl border border-opacity-20 border-blue-500/40"
                  >
                    <skill.icon className="w-14 h-14 opacity-50" />
                  </div>
                ))}
              </div>
            </CustomMarquee>
            <CustomMarquee direction="left">
              <div className="flex gap-6 last:ml-6">
                {skills.slice(6, 12).map((skill, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl border border-opacity-20 border-blue-500/40 "
                  >
                    <skill.icon className="w-14 h-14 opacity-50" />
                  </div>
                ))}
              </div>
            </CustomMarquee>
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
