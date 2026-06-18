import React from 'react';
import Title from '@/components/Title';
import InteractiveCard from '@/components/InteractiveCard';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi';

const Contact = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      link: 'https://github.com/sanchita1001',
      label: 'GitHub',
    },
    {
      icon: FaLinkedinIn,
      link: 'https://linkedin.com/in/sanchitajain1001',
      label: 'LinkedIn',
    },
    {
      icon: FaInstagram,
      link: 'https://instagram.com/sanchitajain1001',
      label: 'Instagram',
    },
    {
      icon: FaWhatsapp,
      link: 'https://wa.me/917982750061',
      label: 'WhatsApp',
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-20">
      <Title title="Contact" />

      <div className="mt-8 md:mt-12">
        <InteractiveCard className="p-5 md:p-8 lg:p-10 overflow-visible">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative z-10">
            {/* Left Side */}
            <div className="w-full lg:w-2/5 flex flex-col gap-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight"
              >
                <span className="text-textPrimary dark:text-white">
                  Let's work together on something
                </span>{' '}
                <span className="titleFont dark:text-white underline decoration-[#7043EC] decoration-4 underline-offset-4">
                  amazing!
                </span>
              </motion.h1>

              <div className="flex flex-col gap-4">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 hover:border-primary transition-all group"
                >
                  <div className="p-3 bg-[#7043EC] rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <HiOutlineMail className="text-2xl" />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-semibold text-textSecondary uppercase tracking-wider">
                      Email
                    </span>

                    <a
                      href="mailto:sanchitajain1001@gmail.com"
                      className="text-sm md:text-base font-bold text-textPrimary dark:text-white hover:text-primary transition-colors break-all"
                    >
                      sanchitajain1001@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 hover:border-primary transition-all group"
                >
                  <div className="p-3 bg-primary rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <HiOutlinePhone className="text-2xl" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-textSecondary uppercase tracking-wider">
                      Phone
                    </span>

                    <a
                      href="tel:+917982750061"
                      className="text-sm md:text-base font-bold text-textPrimary dark:text-white hover:text-primary transition-colors"
                    >
                      +91 79827 50061
                    </a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 hover:border-primary transition-all group"
                >
                  <div className="p-3 bg-[#0077B5] rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <HiOutlineLocationMarker className="text-2xl" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-textSecondary uppercase tracking-wider">
                      Location
                    </span>

                    <span className="text-sm md:text-base font-bold text-textPrimary dark:text-white">
                      New Delhi, India
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 mt-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-cream dark:bg-white/5 border border-gray-100 dark:border-gray-800 rounded-xl shadow-md hover:border-primary transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl text-textPrimary dark:text-white group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-3/5">
              <div className="p-5 md:p-8 rounded-[2rem] bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 relative overflow-hidden flex flex-col justify-center">
                <div className="relative z-10">
                  <h2 className="text-xl md:text-2xl font-bold text-primary dark:text-white mb-4">
                    Send me an email
                  </h2>

                  <p className="text-sm md:text-base text-textSecondary dark:text-gray-400 mb-6">
                    I'm always open to discussing new projects, creative
                    ideas, freelance opportunities, or collaborations.
                  </p>

                  <a
                    href="mailto:sanchitajain1001@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#7043EC] text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform text-sm md:text-base"
                  >
                    <HiOutlineMail className="text-lg" />
                    Email Me
                  </a>
                </div>

                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              </div>
            </div>
          </div>
        </InteractiveCard>
      </div>
    </section>
  );
};

export default Contact;