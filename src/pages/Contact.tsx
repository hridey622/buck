import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageSquare, CheckCircle2, Building2 } from 'lucide-react';
import BackgroundEffect from '../components/ui/BackgroundEffect';
import AnimatedGradient from '../components/ui/AnimatedGradient';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@company.com',
      href: 'mailto:contact@company.com'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    }
  ];

  return (
    <div className="relative min-h-screen py-20">
      <BackgroundEffect variant="default" />
      <AnimatedGradient
        colors={['rgba(10, 33, 192, 0.15)', 'rgba(5, 10, 68, 0.1)']}
        speed={5}
        blur="medium"
      />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Get in
              <span className="text-[#0A21C0] block mt-2">Touch</span>
            </h1>
            <p className="text-xl text-white/90 font-light">
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Form Fields */}
                <div className="space-y-6">
                  {[
                    { name: 'name', label: 'Name', type: 'text', icon: MessageSquare },
                    { name: 'email', label: 'Email', type: 'email', icon: Mail },
                    { name: 'company', label: 'Company', type: 'text', icon: Building2 }
                  ].map((field) => (
                    <div key={field.name} className="relative group">
                      <field.icon className="absolute left-4 top-4 h-5 w-5 text-white/40 group-focus-within:text-[#0A21C0] transition-colors duration-200" />
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.label}
                        value={formState[field.name as keyof typeof formState]}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 text-white placeholder:text-white/40
                                focus:border-[#0A21C0] focus:ring-1 focus:ring-[#0A21C0] transition-all duration-200
                                backdrop-blur-sm"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0A21C0] to-[#050A44] opacity-0
                                  group-hover:opacity-10 group-focus-within:opacity-10 -z-10 transition-opacity duration-200" />
                    </div>
                  ))}

                  {/* Message Field */}
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-white/40 group-focus-within:text-[#0A21C0] transition-colors duration-200" />
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-12 text-white placeholder:text-white/40
                              focus:border-[#0A21C0] focus:ring-1 focus:ring-[#0A21C0] transition-all duration-200
                              backdrop-blur-sm resize-none"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0A21C0] to-[#050A44] opacity-0
                                group-hover:opacity-10 group-focus-within:opacity-10 -z-10 transition-opacity duration-200" />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full px-8 py-4 bg-[#0A21C0] rounded-xl text-white font-medium text-lg
                           hover:bg-[#050A44] transition-all duration-300 flex items-center justify-center gap-2
                           shadow-lg shadow-[#0A21C0]/25 hover:shadow-[#0A21C0]/40 relative overflow-hidden"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              opacity-0 group-hover:opacity-100 blur-sm transform translate-x-full
                              group-hover:translate-x-[-200%] transition-all duration-1000" />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="group block p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10
                           hover:bg-white/10 transition-all duration-300 relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0A21C0] to-[#050A44] rounded-xl opacity-0
                                group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-6">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <info.icon className="h-6 w-6 text-[#0A21C0]" />
                    </div>
                    <div>
                      <h3 className="text-sm text-white/50 mb-1">{info.title}</h3>
                      <p className="text-lg font-medium text-white">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Map or Additional Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="aspect-video rounded-xl overflow-hidden border border-white/10"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640!3d37.757815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}