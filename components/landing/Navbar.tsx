"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneNumber = "254700000000"; // ← Change to your real number
  const waLink = `https://wa.me/${phoneNumber}`;

  const navItems = [
    { name: "Home", href: "/" },
    { name: "All Cars", href: "/cars" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-[#ff5f16]">
              CT Drive
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#ff5f16] font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop WhatsApp CTA */}
          <div className="hidden md:block">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff5f16] hover:bg-[#e04e14] text-white font-medium px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-md"
            >
              <Phone className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-medium text-gray-700 hover:text-[#ff5f16] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center items-center gap-3 bg-[#ff5f16] hover:bg-[#e04e14] text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="h-6 w-6" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}