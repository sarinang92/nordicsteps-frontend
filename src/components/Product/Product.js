import shoes1 from "../../assets/shoes1.webp";
import shoes2 from "../../assets/shoes2.webp";
import shoes3 from "../../assets/shoes3.webp";
import women1 from "../../assets/women1.webp";
import women2 from "../../assets/women2.webp";
import women3 from "../../assets/women3.webp";
import kids1 from "../../assets/kids1.webp";
import kids2 from "../../assets/kids2.webp";
import kids3 from "../../assets/kids3.webp";

const products = [
  // Men's Shoes
  {
    name: "Urban Runner",
    slug: "urban-runner",
    price: 89.99,
    currentPrice: 69.99,
    imageUrl: shoes1,
    description: "Lightweight city shoes with breathable mesh.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    userTarget: "Men",
    isOnSale: true,
  },
  {
    name: "Trail Master",
    slug: "trail-master",
    price: 119.99,
    currentPrice: 99.99,
    imageUrl: shoes2,
    description: "Trail-ready durability and rugged comfort.",
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    userTarget: "Men",
    isOnSale: true,
  },
  {
    name: "Classic Leather",
    slug: "classic-leather",
    price: 139.99,
    imageUrl: shoes3,
    description: "Timeless style with premium leather finish.",
    sizes: ["US 6", "US 7", "US 8", "US 9"],
    userTarget: "Men",
    isOnSale: false,
  },

  // Women's Shoes
  {
    name: "Grace Runner",
    slug: "grace-runner",
    price: 89.99,
    imageUrl: women1,
    description: "Lightweight running shoes designed for daily wear.",
    sizes: ["US 5", "US 6", "US 7", "US 8"],
    userTarget: "Women",
    isOnSale: false,
  },
  {
    name: "Peak Trainer",
    slug: "peak-trainer",
    price: 109.99,
    currentPrice: 89.99,
    imageUrl: women2,
    description: "Performance trainers built for intense workouts.",
    sizes: ["US 6", "US 7", "US 8", "US 9"],
    userTarget: "Women",
    isOnSale: true,
  },
  {
    name: "Elegance Walk",
    slug: "elegance-walk",
    price: 129.99,
    imageUrl: women3,
    description: "Elegant leather shoes with all-day comfort.",
    sizes: ["US 5", "US 6", "US 7", "US 8", "US 9"],
    userTarget: "Women",
    isOnSale: false,
  },

  // Kids' Shoes
  {
    name: "Mini Runner",
    slug: "mini-runner",
    price: 59.99,
    currentPrice: 49.99,
    imageUrl: kids1,
    description: "Light and durable shoes made for playtime.",
    sizes: ["US 1", "US 2", "US 3", "US 4"],
    userTarget: "Kids",
    isOnSale: true,
  },
  {
    name: "Playground Pro",
    slug: "playground-pro",
    price: 64.99,
    imageUrl: kids2,
    description: "Designed for comfort and activity all day long.",
    sizes: ["US 2", "US 3", "US 4", "US 5"],
    userTarget: "Kids",
    isOnSale: false,
  },
  {
    name: "Tiny Trekker",
    slug: "tiny-trekker",
    price: 69.99,
    currentPrice: 54.99,
    imageUrl: kids3,
    description: "All-terrain shoes perfect for little adventurers.",
    sizes: ["US 3", "US 4", "US 5", "US 6"],
    userTarget: "Kids",
    isOnSale: true,
  },
];

export default products;
