// app/cars/page.tsx
import { cars } from "@/data/cars";
import { CarCard } from "@/components/cars/CarCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, ShieldCheck, MapPin, Clock, Star } from "lucide-react";

export const metadata = {
  title: "All Cars & Fleet - CT Drive Kenya | From KSh 3,500/day",
  description:
    "Full fleet: Toyota Vitz, Premio, Prado, Noah, minibuses & luxury SUVs. Available in Mombasa, Nairobi, Diani, Malindi, Watamu, Kisumu and nationwide.",
};

const popularCars = cars.filter((car) => car.popular);

export default function CarsPage() {
  const phoneNumber = "254700000000"; // ← Change to your real number

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-[#ff5f16] text-white text-lg px-6 py-2">
            Festive Season Rates • Limited Stock
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Car<br />
            <span className="text-[#ff5f16]">From KSh 3,500/day</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            Sedans • SUVs • Vans • Minibuses • Luxury<br />
            Available in Mombasa • Nairobi • Diani • Malindi • Watamu • Kisumu & nationwide
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#ff5f16] hover:bg-[#e04e14] text-white text-lg px-12 py-8 shadow-xl"
            >
              <a href={`https://wa.me/${phoneNumber}?text=Hi%20CT%20Drive!%20Please%20send%20me%20your%20full%20car%20list%20with%20prices%20and%20availability.`}>
                <Phone className="mr-3 h-6 w-6" />
                Get Full Car List on WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust Icons */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-gray-700">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-7 w-7 text-[#ff5f16]" />
              <span className="font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="h-7 w-7 text-[#ff5f16]" />
              <span className="font-medium">Most Popular Cars</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-7 w-7 text-[#ff5f16]" />
              <span className="font-medium">Nationwide Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-7 w-7 text-[#ff5f16]" />
              <span className="font-medium">24/7 Booking</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cars Section */}
      {popularCars.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Most Booked This Festive Season
              </h2>
              <p className="text-xl text-gray-600">
                These cars go fast — book now before they’re gone!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
              {popularCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Cars Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Full Fleet — {cars.length}+ Vehicles
            </h2>
            <p className="text-xl text-gray-600">
              Something for every budget and group size
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#ff5f16] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Can’t Decide? We’ll Help You Choose
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Message us your dates, group size & budget — we reply in minutes
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#ff5f16] hover:bg-gray-100 text-xl px-16 py-8 font-bold shadow-2xl"
          >
            <a href={`https://wa.me/${phoneNumber}?text=Hi%20CT%20Drive!%20I%20need%20a%20car%20but%20not%20sure%20which%20one.%20Please%20help!`}>
              <Phone className="mr-4 h-7 w-7" />
              Chat With Us Now
            </a>
          </Button>
        </div>
      </section>

    </>
  );
}