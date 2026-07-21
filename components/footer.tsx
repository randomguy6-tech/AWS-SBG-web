'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { socials } from '@/lib/data';
import * as Icons from 'lucide-react';

const Footer = () => {
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Instagram: Icons.Share2,
    Linkedin: Icons.Share2,
    MessageCircle: Icons.MessageCircle,
    Users: Icons.Users,
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Domains', href: '#domains' },
    { name: 'Events', href: '#events' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src="/aws-sbg-logo.png" alt="AWS SBG UOK" className="h-10 w-10" />
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold text-white">AWS</span>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">SBG</span>
                <span className="text-lg font-bold text-white">UOK</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students at University of Karachi with cloud computing knowledge and practical AWS skills.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-4">More</h4>
            <ul className="space-y-2">
              {quickLinks.slice(3).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="space-y-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm"
        >
          <p>
            Built with <span className="text-red-500">❤️</span> by AWS Student Builder Group UOK
          </p>
          <p className="mt-2 text-xs text-gray-500">
            © 2024 AWS Student Builder Group at University of Karachi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
