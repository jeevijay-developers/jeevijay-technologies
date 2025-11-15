"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMobileMenuOpen(false);
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out",
          isScrolled ? "bg-black/95 backdrop-blur-md py-2" : "bg-transparent py-3"
        )}
        style={{ zIndex: 9999 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
          {/* Logo Section */}
          <NextLink
            className="flex items-center gap-2 transition-transform duration-300 ease-in-out"
            href="/"
          >
            <Image
              src="/logo.png"
              alt="Radison Logo"
              width={168}
              height={48}
              className="object-contain h-16"
            />
          </NextLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                className="text-white/80 hover:text-white transition-colors duration-200 cursor-pointer text-sm font-medium"
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              as={NextLink}
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all duration-200 px-5 py-2 text-sm"
              radius="md"
            >
              Get in touch →
            </Button>
          </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 relative"
              style={{ zIndex: 10000 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={clsx(
          "md:hidden fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        style={{ zIndex: 9998 }}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Side Panel */}
      <div
        className={clsx(
          "md:hidden fixed inset-y-0 right-0 w-1/2 bg-black/95 backdrop-blur-lg transition-transform duration-300 ease-in-out shadow-2xl",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ zIndex: 9999 }}
      >
        <div className="flex flex-col h-full pt-24 px-6">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-6">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                className="text-white text-lg font-medium hover:text-purple-400 transition-colors duration-200 cursor-pointer border-b border-zinc-800 pb-4"
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <div className="mt-8">
            <Button
              as={NextLink}
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium w-full py-3"
              radius="md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in touch →
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
