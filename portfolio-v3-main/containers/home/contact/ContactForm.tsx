'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-semibold text-textSecondary uppercase tracking-widest px-2">
            Your Name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="p-5 rounded-2xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 focus:border-primary outline-none transition-all text-textPrimary dark:text-white text-base"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-textSecondary uppercase tracking-widest px-2">
            Your Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="p-5 rounded-2xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 focus:border-primary outline-none transition-all text-textPrimary dark:text-white text-base"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-semibold text-textSecondary uppercase tracking-widest px-2">
          Subject
        </label>
        <input
          required
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="I want to talk about..."
          className="p-5 rounded-2xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 focus:border-primary outline-none transition-all text-textPrimary dark:text-white text-base"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-textSecondary uppercase tracking-widest px-2">
          Message
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Hi Sanchita, I'd like to..."
          className="p-5 rounded-2xl bg-primary/5 dark:bg-white/5 border border-primary/10 dark:border-white/10 focus:border-primary outline-none transition-all text-textPrimary dark:text-white text-base resize-none"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={status === 'sending'}
        type="submit"
        className={`mt-4 p-6 rounded-2xl text-white text-lg font-bold transition-all shadow-lg ${
          status === 'success' 
          ? 'bg-green-500' 
          : status === 'error' 
          ? 'bg-red-500' 
          : 'bg-primary hover:bg-[#5c38c7]'
        }`}
      >
        {status === 'idle' && 'Send Message'}
        {status === 'sending' && 'Sending...'}
        {status === 'success' && 'Message Sent!'}
        {status === 'error' && 'Something went wrong'}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
