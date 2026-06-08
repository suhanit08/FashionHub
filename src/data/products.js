import tshirt from "../assets/tshirt.jpg";
import hoodie from "../assets/hoodie.jpg";
import jacket from "../assets/denim-jacket.jpg";
import sneakers from "../assets/sneakers.jpg";
import handbag from "../assets/handbag.jpg";
import sunglasses from "../assets/sunglasses.jpg";

const products = [
  {
    id: 1,
    name: "Men's T-Shirt",
    category: "Men",
    price: 799,
    image: tshirt,
    description: "Premium cotton t-shirt"
  },
  {
    id: 2,
    name: "Women's Hoodie",
    category: "Women",
    price: 1499,
    image: hoodie,
    description: "Warm and stylish hoodie"
  },
  {
    id: 3,
    name: "Denim Jacket",
    category: "Men",
    price: 1999,
    image: jacket,
    description: "Classic denim fashion"
  },
  {
    id: 4,
    name: "Sneakers",
    category: "Footwear",
    price: 2499,
    image: sneakers,
    description: "Comfortable everyday sneakers"
  },
  {
    id: 5,
    name: "Handbag",
    category: "Accessories",
    price: 1799,
    image: handbag,
    description: "Elegant handbag"
  },
  {
    id: 6,
    name: "Sunglasses",
    category: "Accessories",
    price: 999,
    image: sunglasses,
    description: "Stylish UV protection"
  }
];

export default products;