import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import connectDB from "./libs/db.js";
import User from "./models/user.model.js";
import Product from "./models/product.model.js";
import Cart from "./models/cart.model.js";
import Order from "./models/order.model.js";

dotenv.config();

// Connect to DB
connectDB();

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();
    await Cart.deleteMany();
    await Order.deleteMany();

    console.log("Existing data cleared");

    // Create users
    const hashedPassword = await bcrypt.hash("123456", 10);

    const adminUser = await User.create({
      username: "Admin",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin",
    });

    const normalUser = await User.create({
      username: "John Doe",
      email: "john@example.com",
      password: hashedPassword,
    });

    console.log("Users created");

    // Create products
    const products = await Product.insertMany([
      { name: "Laptop", description: "High performance laptop", price: 1200, stock: 10 },
      { name: "Headphones", description: "Noise cancelling", price: 200, stock: 20 },
      { name: "Mouse", description: "Wireless mouse", price: 50, stock: 50 },
      { name: "Keyboard", description: "Mechanical keyboard", price: 100, stock: 30 },
    ]);

    console.log("Products created");

    // Create cart for normal user
    const cart = await Cart.create({
      user: normalUser._id,
      items: [
        { product: products[0]._id, quantity: 1 },
        { product: products[1]._id, quantity: 2 },
      ],
    });

    console.log("Cart created");

    // Create an order
    const order = await Order.create({
      user: normalUser._id,
      items: cart.items.map(item => ({
        product: item.product,
        quantity: item.quantity,
        price: products.find(p => p._id.equals(item.product)).price,
      })),
      totalPrice: cart.items.reduce((sum, item) => {
        const price = products.find(p => p._id.equals(item.product)).price;
        return sum + price * item.quantity;
      }, 0),
      status: "pending",
    });

    console.log("Order created");

    console.log("Database seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedDatabase();
