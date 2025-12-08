// app/services/page.tsx
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle, MapPin, Clock, Users, Shield } from "lucide-react";

export const metadata = {
  title: "Our Services - CT Drive Kenya | Car Hire, Airport Transfers & More",
  description:
    "Self-drive, chauffeur-driven, airport transfers, group vans, corporate hire, one-way rentals across Kenya. Instant booking 24/7.",
};

export default function ServicesPage() {
  const phoneNumber = "254700000000"; // ← Change to your real number

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-[#ff5f16] text-white text-lg px-6 py-2">
            Nationwide • 24/7 Booking
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need,<br />
            <span className="text-[#ff5f16]">Anywhere in Kenya</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            From airport pickups to wedding fleets — we’ve got the perfect vehicle and service for every occasion
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#ff5f16] hover:bg-[#e04e14] text-white text-lg px-12 py-8 shadow-xl"
          >
            <a href={`https://wa.me/${phoneNumber}?text=Hi%20CT%20Drive!%20Tell%20me%20more%20about%20your%20services.`}>
              <Phone className="mr-3 h-6 w-6" />
              Ask About Any Service on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#ff5f16]/20"
                >
                  <div className="p-8">
                    <div className="bg-[#ff5f16] text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-9 w-9" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Mini benefits */}
                    <div className="space-y-3">
                      {index === 0 && (
                        <>
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle className="h-5 w-5 text-[#ff5f16]" />
                            <span>Unlimited km in most locations</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle className="h-5 w-5 text-[#ff5f16]" />
                            <span>Full insurance included</span>
                          </div>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle className="h-5 w-5 text-[#ff5f16]" />
                            <span>Professional English-speaking drivers</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle className="h-5 w-5 text-[#ff5f16]" />
                            <span>Fuel & overtime included</span>
                          </div>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle className="h-5 w-5 text-[#ff5f16]" />
                            <span>MBA • JKIA • Wilson • Malindi • Ukunda</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle className="h-5 w-5 text-[#ff5f16]" />
                            <span>Meet & greet with name board</span>
                          </div>
                        </>
                      )}
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="mt-8 w-full border-[#ff5f16] text-[#ff5f16] hover:bg-[#ff5f16] hover:text-white"
                    >
                      <a href={`https://wa.me/${phoneNumber}?text=Hi!%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(
                        service.title
                      )}`}>
                        Book This Service
                      </a>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, text: "Fully Insured Vehicles" },
              { icon: Clock, text: "24/7 Support" },
              { icon: Users, text: "Verified Drivers" },
              { icon: MapPin, text: "Nationwide Coverage" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text}>
                  <Icon className="h-12 w-12 text-[#ff5f16] mx-auto mb-3" />
                  <p className="font-semibold">{item.text}</p>
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
            Which Service Do You Need Today?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Reply in under 2 minutes — even at midnight
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#ff5f16] hover:bg-gray-100 text-xl px-16 py-8 font-bold"
          >
            <a href={`https://wa.me/${phoneNumber}?text=Hi%20CT%20Drive!%20I%20need%20help%20choosing%20the%20right%20service%20for%20my%20trip.`}>
              <Phone className="mr-4 h-7 w-7" />
              Chat With Us Now
            </a>
          </Button>
        </div>
      </section>

    </>
  );
}