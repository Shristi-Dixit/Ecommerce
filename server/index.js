import express from "express";
import dotenv from "dotenv";
import connectDB from "./libs/db.js";

import authRoutes from "./routes/auth.route.js";
import cartRoutes from "./routes/cart.route.js";
import orderRoutes from "./routes/order.route.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
import cors from "cors";



const app = express();

app.use(express.json());

connectDB();
app.use(cors({
  origin: "http://localhost:3000", // frontend URL
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
