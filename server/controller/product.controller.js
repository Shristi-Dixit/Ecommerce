import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const transformedProducts = products.map(p => ({
      ...p.toObject(),
      new_price: p.price
    }));
    res.json(transformedProducts);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const transformedProduct = {
      ...product.toObject(),
      new_price: product.price
    };
    res.json(transformedProduct);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
};
