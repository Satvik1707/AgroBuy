const express = require("express");
const {
  getProduct,
  getProducts,
} = require("../controllers/productsController");
const Product = require("../models/ProductModel");
const router = express.Router();
const Seed = require("../models/SeedModel");

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
    console.log(newProduct);
    await newProduct.save();
    res.status(201).send("New Product Added");
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/products/getproductbyid", async (req, res) => {
  const productid = req.body.id;
  const product = await Product.findById({ _id: productid });
  if (product) {
    res.json({
      name: res.name,
      category: res.category,
      price: res.price,
      brand: res.brand,
      iamge: res.image,
      description: res.description,
      countInStock: res.countInStock,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

router.post("/products/addseeds", async (req, res) => {
  const { product } = req.body;
  try {
    const addSeed = new Seed({
      seedName: product.name,
      quantity: product.quantity,
      date: product.date,
      category: product.category,
      place: product.place,
    });

    const seed = await addSeed.save();
    res.status(201).json(seed);
    res.status(201).send("Seed request sent successfully");
  } catch (error) {
    res.json({ message: error.data });
  }
});

router.get("/products/myseeds", async (req, res) => {
  const seeds = await Seed.find({});
  res.json(seeds);
});

module.exports = router;
