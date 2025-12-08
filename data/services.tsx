import { Car, Users, MapPin,  PhoneCall, Calendar, Star, ArrowRight } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
};

export const services: Service[] = [
  {
    title: "Self-Drive Car Hire",
    description: "Rent and drive yourself anywhere in Kenya",
    icon: Car,
  },
  {
    title: "Chauffeur-Driven",
    description: "Professional driver included – relax and enjoy",
    icon: Users,
  },
  {
    title: "Airport Transfers",
    description: "Moi (MBA), Wilson, JKIA, Malindi – on time, every time",
    icon: MapPin,
  },
  {
    title: "One-Way Rentals",
    description: "Pick up in Mombasa, drop off in Nairobi or Diani",
    icon: ArrowRight,
  },
  {
    title: "Group & Family Vehicles",
    description: "8–25 seater vans & minibuses for families and teams",
    icon: Users,
  },
  {
    title: "Corporate & Event Hire",
    description: "Staff transport, weddings, conferences – we handle it",
    icon: Calendar,
  },
  {
    title: "Festive & Long-Term Packages",
    description: "Special rates for Christmas, New Year & weekly hires",
    icon: Star,
  },
  {
    title: "24/7 Booking & Support",
    description: "Message us anytime – we reply in minutes",
    icon: PhoneCall,
  },
];