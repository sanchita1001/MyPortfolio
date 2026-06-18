import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="py-5 px-5 bg-cream dark:bg-darkBg">
      <div className="footer_contents flex justify-between">
        <h3 className="font-md text-textPrimary font-medium">
          &copy; {new Date().getFullYear()} Sanchita Jain
        </h3>
        <div className=" flex flex-row gap-5 items-center ">
          <div className="social-links  gap-5 flex">
            <Link
              aria-label="linkedin"
              href="https://linkedin.com/in/sanchitajain1001"
              target="_blank"
            >
              <FaLinkedinIn className="text-textPrimary text-2xl" />
            </Link>
            <Link
              aria-label="github"
              href="https://github.com/sanchita1001"
              target="_blank"
            >
              <AiOutlineGithub className="text-textPrimary text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
