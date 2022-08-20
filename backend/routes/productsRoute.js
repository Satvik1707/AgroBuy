const express = require("express");
const {
  getProduct,
  getProducts,
} = require("../controllers/productsController");
const Product = require("../models/ProductModel");
const router = express.Router();

//GET ROUTE FOR ALL PRODUCTS
router.route("/products").get(getProducts);

//GET ROUTE FOR SINGLE PRODUCT
router.route("/products/:id").get(getProduct);

router.post("/products/deleteproduct", async (req, res) => {
  const productid = req.body.id;
  try {
    await Product.findOneAndDelete({ _id: productid });
    res.status(200).send("Product deleted");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

router.post("/products/addproduct", async (req, res) => {
  const { product } = req.body;
  try {
    const newProduct = new Product({
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand,
      category: product.category,
      description: product.description,
    });
    await newProduct.save();
    res.status(201).send("New Product Added");
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
