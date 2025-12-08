export type Car = {
  id: string;
  model: string;
  type: "sedan" | "suv" | "van" | "minibus" | "luxury";
  seats: number;
  pricePerDay: number;        // festive price
  priceNormal?: number;       // optional normal season price
  transmission: "auto" | "manual";
  fuel: "petrol" | "diesel";
  popular: boolean;
  locations: string[];        // e.g. ["Mombasa", "Nairobi", "Diani", "Malindi"]
  image: string;              // path: /cars/prado.jpg
  features?: string[];        // e.g. ["GPS", "Bluetooth", "Reverse Camera"]
};

export const cars: Car[] = [
  {
    id: "demio-01",
    model: "Mazda Demio",
    type: "sedan",
    seats: 5,
    pricePerDay: 3500,
    transmission: "auto",
    fuel: "petrol",
    popular: true,
    locations: ["Mombasa", "Nairobi", "Diani", "Malindi", "Watamu"],
    image: "/cars/demio.jpg",
  },
  {
    id: "vitz-01",
    model: "Toyota Vitz",
    type: "sedan",
    seats: 4,
    pricePerDay: 3500,
    transmission: "auto",
    fuel: "petrol",
    popular: true,
    locations: ["Mombasa", "Nairobi", "Diani"],
    image: "/cars/vitz.jpg",
  },
  {
    id: "premio-01",
    model: "Toyota Premio",
    type: "sedan",
    seats: 4,
    pricePerDay: 4500,
    transmission: "auto",
    fuel: "petrol",
    popular: true,
    locations: ["Mombasa", "Nairobi", "Kisumu"],
    image: "/cars/premio.jpg",
  },
  {
    id: "prado-01",
    model: "Toyota Prado TX",
    type: "suv",
    seats: 7,
    pricePerDay: 12000,
    priceNormal: 10000,
    transmission: "auto",
    fuel: "diesel",
    popular: true,
    locations: ["Mombasa", "Nairobi", "Malindi", "Watamu"],
    image: "/cars/prado.jpg",
    features: ["4x4", "Sunroof", "Leather"],
  },
  {
    id: "noah-01",
    model: "Toyota Noah (8 seater)",
    type: "van",
    seats: 8,
    pricePerDay: 9000,
    transmission: "auto",
    fuel: "petrol",
    popular: false,
    locations: ["Mombasa", "Diani", "Ukunda"],
    image: "/cars/noah.jpg",
  },
  {
    id: "rosa-01",
    model: "Mitsubishi Rosa (22 seater)",
    type: "minibus",
    seats: 22,
    pricePerDay: 18000,
    transmission: "manual",
    fuel: "diesel",
    popular: false,
    locations: ["Mombasa", "Nairobi"],
    image: "/cars/rosa.jpg",
  },
  {
    id: "axio-01",
    model: "Toyota Axio",
    type: "sedan",
    seats: 4,
    pricePerDay: 3750,
    transmission: "auto",
    fuel: "petrol",
    popular: true,
    locations: ["Mombasa", "Nairobi", "Kisumu"],
    image: "/cars/axio.jpg",
  },
  // Add 15–20 more cars here as you grow...
];