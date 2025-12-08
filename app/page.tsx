// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CarCard } from "@/components/cars/CarCard";
import { cars } from "@/data/cars";
import { services } from "@/data/services";
import { WhatsAppFloatingButton } from "@/components/landing/WhatsAppFloatingButton";
import { MapPin, Phone, ShieldCheck, Star } from "lucide-react";

const popularCars = cars.filter((car) => car.popular).slice(0, 6);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-20 pb-32">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-[#ff5f16] text-white text-lg px-4 py-1">
            Festive Season Rates Available
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Car Hire Across Kenya<br />
            <span className="text-[#ff5f16]">From KSh 3,500/day</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto">
            Mombasa • Nairobi • Diani • Malindi • Watamu • Kisumu<br />
            Self-drive, chauffeur-driven, airport transfers & group vans — instant booking 24/7
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#ff5f16] hover:bg-[#e04e14] text-white text-lg px-10 py-7 shadow-xl"
            >
              <a href="https://wa.me/254710584581?text=Hi%20CT%20Drive!%20I%20need%20a%20car%20this%20festive%20season.%20Please%20send%20available%20options.">
                <Phone className="mr-3 h-6 w-6" />
                Get Instant Quote on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-[#ff5f16] text-[#ff5f16] hover:bg-orange-50 px-10 py-7">
              <Link href="/cars">
                View All Cars →
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 mt-12 text-gray-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-[#ff5f16]" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 text-[#ff5f16]" />
              <span>100+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-6 w-6 text-[#ff5f16]" />
              <span>Nationwide Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cars */}
      <section className="py-20 bg-white -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Most Booked This Festive Season
            </h2>
            <p className="text-xl text-gray-600">
              Limited availability — book now before Christmas!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {popularCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#ff5f16] hover:bg-[#e04e14]">
              <Link href="/cars">
                See All {cars.length}+ Cars →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Everything you need, anywhere in Kenya</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="text-center group hover:transform hover:scale-105 transition-all"
                >
                  <div className="bg-[#ff5f16] text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:shadow-2xl transition-shadow">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="font-bold text-lg">{service.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#ff5f16] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Cars are booking out fast for Christmas & New Year
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#ff5f16] hover:bg-gray-100 text-xl px-16 py-8 font-bold shadow-2xl"
          >
            <a href="https://wa.me/254710584581?text=Hi%20CT%20Drive!%20Please%20send%20me%20available%20cars%20for%20the%20festive%20season">
              <Phone className="mr-4 h-7 w-7" />
              Chat on WhatsApp Now
            </a>
          </Button>
        </div>
      </section>

      {/* Floating Button */}
      {/* <WhatsAppFloatingButton
        phoneNumber="254710584581" // ← Change to your real number
        message="Hi CT Drive! I'm looking for a car this festive season. Please send available options and prices."
      /> */}
    </>
  );
}