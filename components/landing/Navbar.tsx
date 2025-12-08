// components/Navbar.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const phoneNumber = "254700000000"; // ← Change to your real number

  const navItems = [
    { name: "Home", href: "/" },
    { name: "All Cars", href: "/cars" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
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
                className="text-gray-700 hover:text-[#ff5f16] font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-[#ff5f16] hover:bg-[#e04e14]">
              <a href={`https://wa.me/${phoneNumber}`}>
                <Phone className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xl font-medium text-gray-700 hover:text-[#ff5f16]"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="bg-[#ff5f16] hover:bg-[#e04e14] mt-6">
                  <a href={`https://wa.me/${phoneNumber}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}