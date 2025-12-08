export type PricingItem = {
  category: string;
  items: {
    name: string;
    description?: string;
    price: string;
    popular?: boolean;
    note?: string;
  }[];
};

export const pricingData: PricingItem[] = [
  {
    category: "Economy & Compact",
    items: [
      { name: "Toyota Vitz / Nissan Note", price: "KSh 3,500 / day", popular: true },
      { name: "Toyota Belta", price: "KSh 3,800 / day" },
      { name: "Mazda Demio", price: "KSh 4,000 / day" },
    ],
  },
  {
    category: "Sedans & Comfort",
    items: [
      { name: "Toyota Axio / Allion", price: "KSh 4,500 / day" },
      { name: "Toyota Premio", price: "KSh 4,800 / day", popular: true },
      { name: "Nissan Wingroad", price: "KSh 4,500 / day" },
      { name: "Toyota Mark X", price: "KSh 7,500 / day" },
    ],
  },
  {
    category: "SUVs & 4x4",
    items: [
      { name: "Toyota Rav4", price: "KSh 8,500 / day" },
      { name: "Toyota Harrier", price: "KSh 10,000 / day" },
      { name: "Toyota Prado TX/TXL", price: "KSh 12,000 – 15,000 / day", popular: true },
      { name: "Land Cruiser V8", price: "KSh 25,000 / day" },
    ],
  },
  {
    category: "Vans & Family",
    items: [
      { name: "Toyota Noah (8 seater)", price: "KSh 9,000 / day", popular: true },
      { name: "Toyota Hiace (14 seater)", price: "KSh 12,000 / day" },
      { name: "Rosa Bus (22–25 seater)", price: "KSh 18,000 – 22,000 / day" },
    ],
  },
  {
    category: "Airport Transfers",
    items: [
      { name: "Mombasa Airport (MBA) → Nyali / Bamburi", price: "KSh 2,500" },
      { name: "MBA → Diani / Ukunda", price: "KSh 5,000 – 6,000" },
      { name: "JKIA → Nairobi CBD / Westlands", price: "KSh 3,000 – 4,000" },
      { name: "Van (8 pax) one-way", price: "From KSh 5,000" },
    ],
  },
  {
    category: "Add-ons & Extras",
    items: [
      { name: "Chauffeur / Driver", price: "+ KSh 2,000 – 3,000 / day" },
      { name: "Extra Driver", price: "KSh 500" },
      { name: "Baby Seat", price: "KSh 500 / day" },
      { name: "One-way drop-off fee", price: "KSh 1,000 – 5,000" },
      { name: "After-hours delivery (10pm–6am)", price: "KSh 1,500" },
    ],
  },
  {
    category: "Long-Term & Packages",
    items: [
      { name: "7+ days", price: "15% discount", note: "Best value" },
      { name: "Monthly hire", price: "From KSh 70,000", note: "Corporate rates available" },
      { name: "Festive Season Surcharge", price: "Included in current rates", note: "Valid Dec 2025 – Jan 6" },
    ],
  },
];