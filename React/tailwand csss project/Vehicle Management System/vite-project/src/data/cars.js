import bmw from "../assets/bmw.jpeg";
import civic from "../assets/civic.jpeg";
import audi from "../assets/auid.jpeg";

const cars = [
  {
    id: 1,
    name: "BMW M5",
    brand: "BMW",
    model: "2025",
    price: "$80,000",
    priceValue: 80000,
    image: bmw,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 4,
    engine: "4.4L V8",
    description:
      "A sporty luxury sedan with bold performance, premium comfort, and advanced tech features.",
    features: ["Adaptive Cruise", "Panoramic Roof", "Premium Sound"],
  },
  {
    id: 2,
    name: "Honda Civic",
    brand: "Honda",
    model: "2024",
    price: "$30,000",
    priceValue: 30000,
    image: civic,
    fuel: "Hybrid",
    transmission: "CVT",
    seats: 5,
    engine: "1.5L Turbo",
    description:
      "Fuel-efficient and stylish, perfect for city driving and long weekend trips.",
    features: ["Lane Assist", "Reverse Camera", "Apple CarPlay"],
  },
  {
    id: 3,
    name: "Audi A6",
    brand: "Audi",
    model: "2025",
    price: "$65,000",
    priceValue: 65000,
    image: audi,
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 5,
    engine: "3.0L Turbo",
    description:
      "Elegant design paired with smart technology and a smooth, premium ride.",
    features: ["Virtual Cockpit", "Matrix LED", "Massage Seats"],
  },
  {
    id: 4,
    name: "Mercedes C-Class",
    brand: "Mercedes",
    model: "2023",
    price: "$58,000",
    priceValue: 58000,
    image: bmw,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    engine: "2.0L Turbo",
    description:
      "Balanced luxury and comfort with a refined interior and strong road presence.",
    features: ["Ambient Lighting", "Parking Assist", "Navigation"],
  },
  {
    id: 5,
    name: "Toyota Corolla",
    brand: "Toyota",
    model: "2022",
    price: "$24,000",
    priceValue: 24000,
    image: civic,
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    engine: "1.8L Hybrid",
    description:
      "Reliable, cost-effective, and easy to maintain for everyday driving.",
    features: ["Safety Sense", "Bluetooth", "Eco Mode"],
  },
  {
    id: 6,
    name: "Tesla Model 3",
    brand: "Tesla",
    model: "2024",
    price: "$45,000",
    priceValue: 45000,
    image: audi,
    fuel: "Electric",
    transmission: "Automatic",
    seats: 5,
    engine: "Electric",
    description:
      "Modern electric performance with smart autopilot features and fast charging.",
    features: ["Autopilot", "Fast Charging", "Touchscreen"],
  },
];

export default cars;
