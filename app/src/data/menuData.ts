export interface MenuItem {
  name: string;
  price?: string;
  description?: string;
  sizes?: { size: string; price: string }[];
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "pizzas",
    name: "Pizzas",
    items: [
      { name: "Margherita Pizza", sizes: [{ size: '7"', price: "240" }, { size: '9"', price: "320" }, { size: '12"', price: "420" }] },
      { name: "Garden Fresh Pizza", sizes: [{ size: '7"', price: "260" }, { size: '9"', price: "340" }, { size: '12"', price: "440" }] },
      { name: "Spinach & Corn Pizza", sizes: [{ size: '7"', price: "280" }, { size: '9"', price: "360" }, { size: '12"', price: "460" }] },
      { name: "Mushroom Overload Pizza", sizes: [{ size: '7"', price: "280" }, { size: '9"', price: "360" }, { size: '12"', price: "460" }] },
      { name: "Golden Corn Pizza", sizes: [{ size: '7"', price: "300" }, { size: '9"', price: "380" }, { size: '12"', price: "480" }] },
      { name: "Veggie Paradise Pizza", sizes: [{ size: '7"', price: "300" }, { size: '9"', price: "380" }, { size: '12"', price: "480" }] },
      { name: "Peri Peri Paneer Pizza", sizes: [{ size: '7"', price: "320" }, { size: '9"', price: "400" }, { size: '12"', price: "500" }] },
      { name: "Paneer Tikka Pizza", sizes: [{ size: '7"', price: "320" }, { size: '9"', price: "400" }, { size: '12"', price: "500" }] },
      { name: "Schezwan Paneer Pizza", sizes: [{ size: '7"', price: "340" }, { size: '9"', price: "420" }, { size: '12"', price: "520" }] },
      { name: "Three Cheese Pizza", sizes: [{ size: '7"', price: "360" }, { size: '9"', price: "440" }, { size: '12"', price: "540" }] },
    ],
  },
  {
    id: "garlic-breads",
    name: "Garlic Breads",
    items: [
      { name: "Classic Garlic Bread", price: "120" },
      { name: "Cheese Garlic Bread", price: "160" },
      { name: "Cheese & Corn Garlic Bread", price: "180" },
      { name: "Cheese Chilly Garlic Bread", price: "180" },
      { name: "Veggie Spicey Garlic Bread", price: "180" },
      { name: "Spinach & Corn Garlic Bread", price: "200" },
      { name: "Mushroom Cheese Garlic Bread", price: "200" },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    items: [
      { name: "Veg Sandwich / Cheese", price: "50 / 70" },
      { name: "Veg Toast Sandwich / Cheese", price: "60 / 80" },
      { name: "Plain Cheese Sandwich / Toasted", price: "60 / 80" },
      { name: "Veggie Mayo Sandwich / Toasted", price: "80 / 100" },
      { name: "Veggie Tandoori Mayo / Toasted", price: "100 / 120" },
      { name: "OTC Special Sandwich", price: "150" },
      { name: "Paneer Cheese Toast", price: "120" },
      { name: "Peri Peri Paneer Toast", price: "120" },
      { name: "Tandoori Paneer Toast", price: "130" },
      { name: "Paneer Schezwan Toast", price: "120" },
      { name: "Paneer & Corn Toast", price: "140" },
      { name: "Cheese Chilly Toast Sandwich", price: "80" },
      { name: "Cheese Corn Toast Sandwich", price: "100" },
      { name: "Onion Capsicum Cheese Toast", price: "100" },
      { name: "Masala Cheese Toast Sandwich", price: "120" },
      { name: "Chocolate Sandwich", price: "150" },
    ],
  },
  {
    id: "momos",
    name: "Momos",
    items: [
      { name: "Veg Momos", price: "180 / 200" },
      { name: "Cheese & Corn Momos", price: "200 / 220" },
      { name: "Schezwan Momos", price: "220 / 240" },
      { name: "Paneer Tikka Momos", price: "240 / 260" },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    items: [
      { name: "Alfredo White Sauce Pasta", price: "180" },
      { name: "Pasta E Funghi", price: "200" },
      { name: "Arabiatta Red Sauce Pasta", price: "220" },
      { name: "Pink Sauce Pasta", price: "240" },
      { name: "Aglio E Olio Pasta (Penne)", price: "240" },
    ],
  },
  {
    id: "maggi",
    name: "Maggi",
    items: [
      { name: "Classic Maggi", price: "80" },
      { name: "Masala Maggi", price: "100" },
      { name: "Peri Peri Maggi", price: "100" },
      { name: "Veggie Maggi", price: "110" },
      { name: "Cheese Maggi", price: "120" },
      { name: "Schezwan Maggi", price: "120" },
      { name: "Peri Peri Paneer Maggi", price: "140" },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    items: [
      { name: "Potato Garlic Shots", price: "120" },
      { name: "Veggie Fingers", price: "140" },
      { name: "Cheese Corn Pops", price: "140" },
      { name: "Mini Wada Shots", price: "140" },
      { name: "Mozzarella Sticks", price: "180" },
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    items: [
      { name: "Aloo Tikki Burger / Cheese", price: "80 / 100" },
      { name: "Classic Veggie Burger / Cheese", price: "100 / 120" },
      { name: "Spicey Veggie Burger / Cheese", price: "120 / 140" },
      { name: "Double Cheese Burger", price: "140" },
      { name: "Veggie Tandoori Burger", price: "140" },
      { name: "Double Decker Cheese Burger", price: "160" },
    ],
  },
  {
    id: "fries-wedges",
    name: "Fries & Wedges",
    items: [
      { name: "Classic French Fries", price: "80" },
      { name: "Masala Fries", price: "90" },
      { name: "Peri Peri Fries", price: "100" },
      { name: "Schezwan Fries", price: "120" },
      { name: "Cheesy Mayo Fries", price: "120" },
      { name: "Tandoori Mayo Fries", price: "140" },
      { name: "Potato Wedges", price: "100" },
      { name: "Masala Wedges", price: "110" },
      { name: "Peri Peri Wedges", price: "120" },
    ],
  },
  {
    id: "hot-beverages",
    name: "Hot Beverages",
    items: [
      { name: "Black Tea", price: "40" },
      { name: "Black Coffee", price: "50" },
      { name: "Regular Tea", price: "50" },
      { name: "Regular Coffee", price: "60" },
      { name: "Green Tea", price: "70" },
      { name: "Lemon Tea", price: "70" },
      { name: "Filter Coffee", price: "80" },
      { name: "Hazzlenut Hot Coffee", price: "80" },
      { name: "Hot Chocolate", price: "100" },
    ],
  },
  {
    id: "cold-coffees",
    name: "Cold Coffees",
    items: [
      { name: "Cold Coffee", price: "120" },
      { name: "Cold Coffee With IC", price: "140" },
      { name: "Hazzlenut Cold Coffee", price: "140" },
    ],
  },
  {
    id: "frappes",
    name: "Frappes",
    items: [
      { name: "Strawberry Frappe", price: "180" },
      { name: "Caramel Frappe", price: "180" },
      { name: "Mocha Frappe", price: "220" },
      { name: "Oreo Frappe", price: "250" },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      { name: "Brownie Bliss", price: "250" },
    ],
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    items: [
      { name: "Banana Milkshake", price: "80" },
      { name: "Vanilla Milkshake", price: "100" },
      { name: "Chocolate Milkshake", price: "120" },
      { name: "Butterscotch Milkshake", price: "120" },
      { name: "Mango Milkshake", price: "140" },
      { name: "Strawberry Milkshake", price: "140" },
    ],
  },
  {
    id: "juices",
    name: "Juices",
    items: [
      { name: "Watermelon Juice", price: "100 / 120" },
      { name: "Red Guava Juice", price: "120 / 140" },
      { name: "Pineapple Juice", price: "120 / 140" },
      { name: "Mango Juice", price: "120 / 140" },
      { name: "Mosambi Juice", price: "140 / 180" },
      { name: "Apple Juice", price: "140 / 180" },
    ],
  },
  {
    id: "cold-beverages",
    name: "Cold Beverages",
    items: [
      { name: "Fresh Lime Soda", price: "50 / 70" },
      { name: "Plain Chaas", price: "50 / 70" },
      { name: "Masala Chaas", price: "60 / 80" },
      { name: "Lassi", price: "100 / 120" },
      { name: "Mango Lassi", price: "120 / 140" },
      { name: "Strawberry Lassi", price: "120 / 140" },
      { name: "Lime Mojito", price: "120 / 140" },
      { name: "Mint Mojito", price: "120 / 140" },
      { name: "Watermelon Mojito", price: "120 / 140" },
      { name: "Green Apple Mojito", price: "140 / 160" },
      { name: "Blue Curacao Fizz", price: "140 / 160" },
      { name: "Strawberry Cooler", price: "120 / 140" },
      { name: "Frozen Ocean Mist", price: "160 / 180" },
      { name: "Lemon Iced Tea", price: "100 / 120" },
      { name: "Peach Iced Tea", price: "120 / 140" },
      { name: "Strawberry Iced Tea", price: "140 / 160" },
    ],
  },
];
