"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-black/95 backdrop-blur-md py-3" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <NextLink
            className={clsx(
              "flex items-center gap-2 transition-all duration-300",
              isScrolled ? "scale-90" : "scale-100"
            )}
            href="/"
          >
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Logo />
            </div>
            <span className="text-white font-semibold text-xl">Radison</span>
          </NextLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navItems.map((item) => (
              <NextLink
                key={item.href}
                className={clsx(
                  "text-white/80 hover:text-white transition-colors duration-200",
                  isScrolled ? "text-sm" : "text-base"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              as={NextLink}
              href="/contact"
              className={clsx(
                "bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all duration-300",
                isScrolled ? "px-4 py-2 text-sm" : "px-6 py-3 text-base"
              )}
              radius="md"
            >
              Get in touch →
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2">
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
          </button>
        </div>
      </div>
    </nav>
  );
};
