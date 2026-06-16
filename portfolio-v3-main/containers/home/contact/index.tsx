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
    <section id="contact" className="py-20 md:py-32">
      <Title title="Contact" />

      <div className="mt-12 md:mt-24">
        <InteractiveCard className="p-8 md:p-16 lg:p-24 overflow-visible">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative z-10">
            {/* Left Side: Contact Info & Socials */}
            <div className="w-full lg:w-2/5 flex flex-col gap-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-primary text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1]"
              >
                <span className="text-textPrimary dark:text-white font-bold">
                  Let's work together on something
                </span>{' '}
                <span className="titleFont dark:text-white underline decoration-[#7043EC] decoration-8 underline-offset-8">amazing! </span>
              </motion.h1>

              <div className="flex flex-col gap-6 mt-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 hover:border-primary transition-all group"
                >
                  <div className="p-4 bg-[#7043EC] rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <HiOutlineMail className="text-3xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-textSecondary uppercase tracking-widest">Email</span>
                    <a href="mailto:sanchitajain1001@gmail.com" className="text-lg md:text-xl font-bold text-textPrimary dark:text-white hover:text-primary transition-colors break-all">
                      sanchitajain1001@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 hover:border-primary transition-all group"
                >
                  <div className="p-4 bg-primary rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <HiOutlinePhone className="text-3xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-textSecondary uppercase tracking-widest">Phone</span>
                    <a href="tel:+917982750061" className="text-lg md:text-xl font-bold text-textPrimary dark:text-white hover:text-primary transition-colors">
                      +91 79827 50061
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 hover:border-primary transition-all group"
                >
                  <div className="p-4 bg-[#0077B5] rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform">
                    <HiOutlineLocationMarker className="text-3xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-textSecondary uppercase tracking-widest">Location</span>
                    <span className="text-lg md:text-xl font-bold text-textPrimary dark:text-white">
                      New Delhi, India
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Social Links Row */}
              <div className="flex flex-wrap gap-4 mt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white dark:bg-white/5 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-lg hover:border-primary transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="text-2xl text-textPrimary dark:text-white group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right Side: Contact CTA */}
            <div className="w-full lg:w-3/5">
               <div className="p-8 md:p-12 rounded-[2.5rem] bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 relative overflow-hidden h-full flex flex-col justify-center">
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Send us an email</h2>
                    <p className="text-lg text-textSecondary dark:text-gray-400 mb-8">
                      I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                    <a 
                      href="mailto:sanchitajain1001@gmail.com"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-[#7043EC] text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform text-lg"
                    >
                      <HiOutlineMail className="text-2xl" />
                      Email Me
                    </a>
                  </div>
                  {/* Decorative background blur */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               </div>
            </div>
          </div>
        </InteractiveCard>
      </div>
    </section>
  );
};

export default Contact;
