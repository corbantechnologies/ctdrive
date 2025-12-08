// components/CarCard.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin } from "lucide-react";
import { Car } from "@/data/cars";

export function CarCard({ car }: { car: Car }) {
  const waMessage = `Hi CT Drive! I'm interested in the ${car.model} (${car.seats} seater) at KSh ${car.pricePerDay}/day. Please confirm availability.`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="relative h-48 bg-gray-200">
        <Image
          src={car.image}
          alt={car.model}
          fill
          className="object-cover"
        />
        {car.popular && (
          <Badge className="absolute top-3 left-3 bg-[#ff5f16] text-white">
            Popular
          </Badge>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold">{car.model}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-600 my-2">
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" /> {car.seats} seats
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" /> {car.locations[0]} +
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-3xl font-bold text-[#ff5f16]">
              KSh {car.pricePerDay.toLocaleString()}
            </span>
            <span className="text-gray-500 text-sm">/day</span>
          </div>
          <Button asChild className="bg-[#ff5f16] hover:bg-[#e04e14]">
            <a
              href={`https://wa.me/254700000000?text=${encodeURIComponent(waMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}