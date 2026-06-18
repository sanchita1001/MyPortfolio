'use client';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import {

  FaGithub,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube
} from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { CiDark, CiMenuFries } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';
import { MdLightMode } from 'react-icons/md';
import { menuData } from '@/data/index';
//import styles 👇
import 'react-modern-drawer/dist/index.css';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure the component renders only after the client mounts

    const sections = ['hero', 'about', 'education', 'projects', 'achievements', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const menuItem = menuData.find((item: any) => item.link.includes(`#${sectionId}`));
          if (menuItem) {
            setSelectedLink(menuItem.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  if (!mounted) return null;

  return (
    <nav className="px-5 md:px-12 lg:px-24 w-full py-4 flex flex-row justify-between items-center sticky top-0 z-50 bg-cream/70 dark:bg-[#121212]/70 backdrop-blur-lg border-b border-gray-100/50 dark:border-gray-800/50 shadow-sm transition-all duration-300">
      <Link href="/">
        <motion.div 
          className="logo cursor-pointer"
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className={` ${
              currentTheme === 'dark' ? 'text-white' : 'text-textPrimary '
            } text-3xl font-bold tracking-tighter`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block"
              whileHover={{
                color: '#7043EC',
                textShadow: '0 0 20px rgba(112, 67, 236, 0.5)',
              }}
              transition={{ duration: 0.3 }}
            >
              S
            </motion.span>
            <motion.span
              className="inline-block"
              whileHover={{
                color: '#7043EC',
                textShadow: '0 0 20px rgba(112, 67, 236, 0.5)',
              }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              J
            </motion.span>
          </motion.span>
        </motion.div>
      </Link>
      <menu className="nav-links bg-cream py-4 px-12 rounded-full border border-gray-100 hidden sm:hidden md:hidden lg:block dark:bg-darkBg dark:border-gray-800 shadow-xl">
        <ul className="flex gap-8 text-textPrimary dark:text-white text-base cursor-pointer px-2 ">
          {menuData.map((item: any, index: number) => {
            const isSelected = item.name === selectedLink;
            const isHomeOrHash = item.link === '/' || item.link.startsWith('/#');
            
            return (
              <li key={index}>
                {isHomeOrHash ? (
                  <a
                    href={item.link}
                    onClick={(e) => {
                      setSelectedLink(item.name);
                      // Smooth scroll for hash links
                      if (item.link.startsWith('/#')) {
                        e.preventDefault();
                        const target = document.querySelector(item.link.substring(1));
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }
                    }}
                    className=" relative"
                  >
                    <span className="font-normal">
                      {item.name}
                      {isSelected ? (
                        <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                          <svg
                            width="37"
                            height="8"
                            viewBox="0 0 37 8"
                            fill="none"
                          >
                            <motion.path
                              d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                              stroke="#7043EC"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{
                                strokeDasharray: 84.20591735839844,
                                strokeDashoffset: 84.20591735839844
                              }}
                              animate={{
                                strokeDashoffset: 0
                              }}
                              transition={{
                                duration: 1
                              }}
                            />
                          </svg>
                        </motion.div>
                      ) : null}
                    </span>
                  </a>
                ) : (
                  <Link
                    href={item.link}
                    onClick={() => setSelectedLink(item.name)}
                    className=" relative"
                  >
                    <span className="font-normal">
                      {item.name}
                      {isSelected ? (
                        <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                          <svg
                            width="37"
                            height="8"
                            viewBox="0 0 37 8"
                            fill="none"
                          >
                            <motion.path
                              d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                              stroke="#7043EC"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{
                                strokeDasharray: 84.20591735839844,
                                strokeDashoffset: 84.20591735839844
                              }}
                              animate={{
                                strokeDashoffset: 0
                              }}
                              transition={{
                                duration: 1
                              }}
                            />
                          </svg>
                        </motion.div>
                      ) : null}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </menu>

      <div className="social-links  gap-5 hidden sm:hidden md:flex ">
        <Link
          aria-label="github"
          href="https://github.com/sanchita1001"
          target="_blank"
        >
          <FaGithub className="text-textPrimary dark:text-white text-md" />
        </Link>
        <Link
          aria-label="linkedin"
          href="https://linkedin.com/in/sanchitajain1001"
          target="_blank"
        >
          <FaLinkedinIn className="text-textPrimary dark:text-white text-md" />
        </Link>
      </div>

      <div className="theme-switcher flex gap-5">
        {currentTheme === 'dark' ? (
          <MdLightMode
            className="text-textPrimary text-2xl cursor-pointer dark:text-white"
            onClick={() => setTheme('light')}
          />
        ) : (
          <CiDark
            className="text-textPrimary text-2xl cursor-pointer dark:text-white"
            onClick={() => setTheme('dark')}
          />
        )}

        <div className="hamburger block md:block lg:hidden">
          {mobileMenuOpen ? (
            <AiOutlineClose
              className="text-textPrimary dark:text-white text-2xl cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            />
          ) : (
            <CiMenuFries
              className="text-textPrimary dark:text-white text-2xl cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            />
          )}

          {!mobileMenuOpen ? null : (
            <motion.div
              animate={{ y: 10, opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.2 }}
              className={`absolute top-12 right-0 px-10 py-5 rounded-md ${currentTheme === 'dark' ? 'bg-black border border-gray-500' : 'bg-cream border border-gray-600'}`}
            >
              <motion.ul
                animate={{ y: 0, opacity: 1 }}
                className={`flex flex-col gap-5 ${currentTheme === 'dark' ? 'text-white' : 'text-textPrimary '} text-base cursor-pointer px-0 mt-0`}
              >
                {menuData.map((item: any, index: number) => {
                  const isSelected = item.name === selectedLink;
                  const isHomeOrHash = item.link === '/' || item.link.startsWith('/#');
                  
                  return isHomeOrHash ? (
                    <a
                      href={item.link}
                      key={index}
                      onClick={(e) => {
                        setSelectedLink(item.name);
                        setMobileMenuOpen(false);
                        // Smooth scroll for hash links
                        if (item.link.startsWith('/#')) {
                          e.preventDefault();
                          const target = document.querySelector(item.link.substring(1));
                          if (target) {
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }
                      }}
                      className=" relative"
                    >
                      <li className="font-normal">
                        {item.name}
                        {isSelected ? (
                          <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                            <svg
                              width="37"
                              height="8"
                              viewBox="0 0 37 8"
                              fill="none"
                            >
                              <motion.path
                                d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                                stroke="#7043EC"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{
                                  strokeDasharray: 84.20591735839844,
                                  strokeDashoffset: 84.20591735839844
                                }}
                                animate={{
                                  strokeDashoffset: 0
                                }}
                                transition={{
                                  duration: 1
                                }}
                              />
                            </svg>
                          </motion.div>
                        ) : null}
                      </li>
                    </a>
                  ) : (
                    <Link
                      href={item.link}
                      key={index}
                      onClick={() => {
                        setSelectedLink(item.name);
                        setMobileMenuOpen(false);
                      }}
                      className=" relative"
                    >
                      <li className="font-normal">
                        {item.name}
                        {isSelected ? (
                          <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                            <svg
                              width="37"
                              height="8"
                              viewBox="0 0 37 8"
                              fill="none"
                            >
                              <motion.path
                                d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                                stroke="#7043EC"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{
                                  strokeDasharray: 84.20591735839844,
                                  strokeDashoffset: 84.20591735839844
                                }}
                                animate={{
                                  strokeDashoffset: 0
                                }}
                                transition={{
                                  duration: 1
                                }}
                              />
                            </svg>
                          </motion.div>
                        ) : null}
                      </li>
                    </Link>
                  );
                })}
              </motion.ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
