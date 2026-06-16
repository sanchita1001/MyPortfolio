import React from 'react';
import Title from '@/components/Title';
import InteractiveCard from '@/components/InteractiveCard';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import ContactForm from './ContactForm';

const Contact = () => {
  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/sanchita1001", label: "GitHub" },
    { icon: FaLinkedinIn, link: "https://linkedin.com/in/sanchitajain1001", label: "LinkedIn" },
    { icon: FaInstagram, link: "https://instagram.com/sanchita._.jain", label: "Instagram" },
    { icon: FaWhatsapp, link: "https://wa.me/917982750061", label: "WhatsApp" },
  ];

  return (
    <section id="contact" className="py-10 md:py-16 lg:py-20 xl:py-32">
      <Title title="Contact" />

      <div className="mt-6 md:mt-12 lg:mt-16 xl:mt-24">
        <InteractiveCard className="p-5 md:p-8 lg:p-12 xl:p-16 2xl:p-24 overflow-visible">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-start relative z-10">
            {/* Left Side: Contact Info & Socials */}
            <div className="w-full lg:w-2/5 flex flex-col gap-5 md:gap-6 lg:gap-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold leading-[1.1]"
              >
                <span className="text-textPrimary dark:text-white font-bold">
                  Let's work together on something
                </span>{' '}
                <span className="titleFont dark:text-white underline decoration-[#7043EC] decoration-4 md:decoration-6 lg:decoration-8 underline-offset-4 md:underline-offset-6 lg:underline-offset-8">amazing! </span>
              </motion.h1>

              <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 mt-2 md:mt-3">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6 p-3 md:p-4 lg:p-5 xl:p-6 rounded-xl md:rounded-2xl lg:rounded-3xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 hover:border-primary transition-all group w-full"
                >
                  <div className="flex-shrink-0 p-2 md:p-2.5 lg:p-3 xl:p-4 bg-[#7043EC] rounded-lg md:rounded-xl lg:rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <HiOutlineMail className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[10px] md:text-xs font-semibold text-textSecondary uppercase tracking-widest">Email</span>
                    <a href="mailto:sanchitajain1001@gmail.com" className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold text-textPrimary dark:text-white hover:text-primary transition-colors break-all">
                      sanchitajain1001@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6 p-3 md:p-4 lg:p-5 xl:p-6 rounded-xl md:rounded-2xl lg:rounded-3xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 hover:border-primary transition-all group w-full"
                >
                  <div className="flex-shrink-0 p-2 md:p-2.5 lg:p-3 xl:p-4 bg-primary rounded-lg md:rounded-xl lg:rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <HiOutlinePhone className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[10px] md:text-xs font-semibold text-textSecondary uppercase tracking-widest">Phone</span>
                    <a href="tel:+917982750061" className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold text-textPrimary dark:text-white hover:text-primary transition-colors">
                      +91 79827 50061
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6 p-3 md:p-4 lg:p-5 xl:p-6 rounded-xl md:rounded-2xl lg:rounded-3xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 hover:border-primary transition-all group w-full"
                >
                  <div className="flex-shrink-0 p-2 md:p-2.5 lg:p-3 xl:p-4 bg-[#0077B5] rounded-lg md:rounded-xl lg:rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <HiOutlineLocationMarker className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[10px] md:text-xs font-semibold text-textSecondary uppercase tracking-widest">Location</span>
                    <span className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold text-textPrimary dark:text-white">
                      New Delhi, India
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Social Links Row */}
              <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4 mt-2 md:mt-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 lg:p-4 bg-white dark:bg-white/5 border border-gray-100 dark:border-gray-800 rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg hover:border-primary transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="text-lg md:text-xl lg:text-2xl text-textPrimary dark:text-white group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right Side: Contact CTA */}
            <div className="w-full lg:w-3/5">
               <div className="p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 rounded-xl md:rounded-2xl lg:rounded-[2.5rem] bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 relative overflow-hidden h-full flex flex-col justify-center w-full">
                  <div className="relative z-10">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-primary dark:text-white mb-3 md:mb-4 lg:mb-5 xl:mb-6">Send us an email</h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-textSecondary dark:text-gray-400 mb-4 md:mb-5 lg:mb-6 xl:mb-8">
                      I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                    <a 
                      href="mailto:sanchitajain1001@gmail.com"
                      className="inline-flex items-center gap-2 md:gap-2.5 lg:gap-3 px-4 md:px-5 lg:px-6 xl:px-8 py-2 md:py-2.5 lg:py-3 xl:py-4 bg-[#7043EC] text-white font-bold rounded-lg md:rounded-xl lg:rounded-2xl shadow-lg hover:scale-105 transition-transform text-xs sm:text-sm md:text-base lg:text-lg"
                    >
                      <HiOutlineMail className="text-base md:text-lg lg:text-xl xl:text-2xl" />
                      Email Me
                    </a>
                  </div>
                  {/* Decorative background blur */}
                  <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
               </div>
            </div>
          </div>
        </InteractiveCard>
      </div>
    </section>
  );
};

export default Contact;
