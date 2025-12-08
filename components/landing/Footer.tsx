// components/Footer.tsx
import Link from "next/link";
import { Phone, Mail, MapPin, } from "lucide-react";
import { Separator } from "../ui/separator";

export function Footer() {
  const phone = "+254 700 000 000"; // ← Your real number
  const email = "info@corbantechnologies.org";
  const waNumber = "254700000000";

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-[#ff5f16] mb-4">CT Drive</h3>
            <p className="text-gray-400">
              Your trusted car hire partner across Kenya.<br />
              Available 24/7 • Instant booking • Best rates
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {["Home", "All Cars", "Services", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Popular Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Airport Transfers</li>
              <li>Self-Drive Hire</li>
              <li>Chauffeur-Driven</li>
              <li>Wedding & Events</li>
              <li>Corporate Hire</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#ff5f16]" />
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#ff5f16]" />
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#ff5f16]" />
                <span>Mombasa • Nairobi • Diani • Nationwide</span>
              </div>
            </div>

            {/* Social */}
            {/* <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-[#ff5f16]"><Facebook /></a>
              <a href="#" className="hover:text-[#ff5f16]"><Instagram /></a>
            </div> */}
          </div>
        </div>

        <Separator className="my-10 bg-gray-800" />

        <div className="text-center text-gray-500">
          © {new Date().getFullYear()} CT Drive — Powered by Corban Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}