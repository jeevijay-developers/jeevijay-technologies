"use client";

import { Link } from "@heroui/link";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa6";

export const Footer = () => {
  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Benefits", href: "#benefits" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">JV</span>
              </div>
              <span className="text-white font-bold text-xl">
                Jeevijay Technologies
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Intelligent automation solutions that help businesses work
              smarter, scale faster, and achieve more with AI-powered tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-zinc-800 hover:border-purple-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-zinc-800 hover:border-purple-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-zinc-800 hover:border-purple-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                <a
                  href="mailto:hello@xtract.com"
                  className="hover:text-white transition-colors"
                >
                  hello@jeevijay.com
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +91 96194 83010
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jeevijay Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
