// app/contact/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle } from "lucide-react";

// export const metadata = {
//   title: "Contact Us - CT Drive Kenya | 24/7 Support",
//   description: "Get in touch anytime. WhatsApp, call, or email us. We reply in minutes.",
// };

const phoneNumber = "254710584581";
const waLink = `https://wa.me/${phoneNumber}`;
const email = "info@corbantechnologies.org";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mblnaaod", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.currentTarget.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-[#ff5f16] text-white text-lg px-6 py-2">
            We Reply in Minutes — Even at 2 AM
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let’s Get You on the Road
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Call • WhatsApp • Email<br />
            We’re here 24/7, 365 days a year
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* WhatsApp */}
            <div className="text-center p-10 rounded-2xl border-2 border-[#ff5f16] bg-orange-50">
              <div className="bg-[#ff5f16] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">WhatsApp Us</h3>
              <p className="text-3xl font-bold text-[#ff5f16] mb-4">+254 710 584 581</p>
              <p className="text-gray-600 mb-6">Fastest response — usually under 5 minutes</p>
              <Button asChild size="lg" className="bg-[#ff5f16] hover:bg-[#e04e14]">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Open WhatsApp
                </a>
              </Button>
            </div>

            {/* Call */}
            <div className="text-center p-10 rounded-2xl border-2 border-gray-300 hover:border-[#ff5f16] transition-all">
              <div className="bg-gray-800 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Call Us</h3>
              <p className="text-3xl font-bold text-gray-800 mb-4">+254 710 584 581</p>
              <p className="text-gray-600 mb-6">Available 24/7 • English & Swahili</p>
              <Button asChild size="lg" variant="outline" className="border-2">
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Email */}
            <div className="text-center p-10 rounded-2xl border-2 border-gray-300 hover:border-[#ff5f16] transition-all">
              <div className="bg-gray-800 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Email Us</h3>
              <p className="text-xl font-medium text-gray-800 mb-4">{email}</p>
              <p className="text-gray-600 mb-6">Perfect for quotes & corporate inquiries</p>
              <Button asChild size="lg" variant="outline" className="border-2">
                <a href={`mailto:${email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Form */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Send Us a Message</h2>

              {submitStatus === "success" && (
                <div className="mb-8 p-8 bg-green-50 border-2 border-green-200 rounded-2xl text-center">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Thank You! Message Sent Successfully
                  </h3>
                  <p className="text-green-700">
                    We’ll reply on WhatsApp or call you in under 10 minutes!
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-8 p-8 bg-red-50 border-2 border-red-200 rounded-2xl text-center">
                  <p className="text-red-700 font-medium">
                    Oops! Something went wrong. Please try WhatsApp instead.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="name" placeholder="Your Name" required disabled={isSubmitting}
                  className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-[#ff5f16] focus:outline-none transition disabled:opacity-70" />
                <input type="tel" name="phone" placeholder="Your Phone Number (e.g. 0710584581)" required disabled={isSubmitting}
                  className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-[#ff5f16] focus:outline-none transition disabled:opacity-70" />
                <input type="email" name="email" placeholder="Your Email (optional)" disabled={isSubmitting}
                  className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-[#ff5f16] focus:outline-none transition disabled:opacity-70" />
                <textarea name="message" rows={5} placeholder="Tell us your dates, number of people, and preferred car..." required disabled={isSubmitting}
                  className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:border-[#ff5f16] focus:outline-none transition resize-none disabled:opacity-70" />
                <Button type="submit" size="lg" disabled={isSubmitting}
                  className="w-full bg-[#ff5f16] hover:bg-[#e04e14] text-lg py-7 disabled:opacity-70">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Image Placeholder */}
            <div>
              <h2 className="text-4xl font-bold mb-8">We’re Here for You</h2>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-full min-h-96">
                <Image
                  src="/contact-hero.jpg"
                  alt="CT Drive Team - Ready to serve you 24/7"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-2">Nationwide Service</h3>
                    <p className="text-lg opacity-90 flex items-center gap-2">
                      <MapPin className="h-6 w-6" />
                      Mombasa • Nairobi • Diani • Malindi • Watamu & Beyond
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#ff5f16] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Book?</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">The fastest way: just tap below</p>
          <Button asChild size="lg" className="bg-white text-[#ff5f16] hover:bg-gray-100 text-xl px-16 py-8 font-bold">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-4 h-7 w-7" />
              WhatsApp Now
            </a>
          </Button>
        </div>
      </section>

    </>
  );
}