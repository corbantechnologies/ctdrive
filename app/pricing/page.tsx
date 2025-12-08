import { pricingData } from "@/data/pricing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Check } from "lucide-react";

export const metadata = {
  title: "Pricing - CT Drive Kenya | Transparent Car Hire Rates",
  description: "Current festive season rates. Self-drive from KSh 3,500/day. Airport transfers, SUVs, vans, long-term discounts.",
};

const phoneNumber = "254710584581";

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-[#ff5f16] text-white text-lg px-6 py-2">
            Festive Season Rates 2025
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transparent Pricing<br />
            <span className="text-[#ff5f16]">No Hidden Fees</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10">
            What you see is what you pay. Full insurance & 24/7 support included.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#ff5f16] hover:bg-[#e04e14] text-white text-lg px-12 py-8"
          >
            <a href={`https://wa.me/${phoneNumber}?text=Hi! Please send me your latest price list.`}>
              <Phone className="mr-3 h-6 w-6" />
              Get Quote on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 max-w-6xl mx-auto">
            {pricingData.map((section) => (
              <div key={section.category}>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
                  {section.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className={`p-6 rounded-xl border-2 transition-all ${
                        item.popular
                          ? "border-[#ff5f16] bg-orange-50 shadow-lg scale-105"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      {item.popular && (
                        <Badge className="mb-3 bg-[#ff5f16] text-white">Most Popular</Badge>
                      )}
                      <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                      {item.description && (
                        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                      )}
                      <p className="text-2xl font-bold text-[#ff5f16] mt-4">
                        {item.price}
                      </p>
                      {item.note && <p className="text-sm text-gray-500 mt-2">{item.note}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#ff5f16] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Need a Custom Quote?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Group trips, weddings, corporate — we give the best rates
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#ff5f16] hover:bg-gray-100 text-xl px-16 py-8 font-bold"
          >
            <a href={`https://wa.me/${phoneNumber}?text=Hi CT Drive! I need a custom quote for my trip.`}>
              <Phone className="mr-4 h-7 w-7" />
              Message Us Now
            </a>
          </Button>
        </div>
      </section>

    </>
  );
}