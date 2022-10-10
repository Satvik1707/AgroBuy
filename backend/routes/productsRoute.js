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

router.get("/products/myseeds", async (req, res) => {
  console.log(req);
  const seeds = await Seed.find({ breeder: "6341c2a642861b3e7536d9a3" });
  res.json(seeds);
});

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

router.post("/products/getproductbyid", async (req, res) => {
  const productid = req.body.id;
  try {
    const product = await Product.findOne({ _id: productid });
    res.send(product);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/products/updateproduct", async (req, res) => {
  const product = req.body.updatedProduct;
  const idnew = req.body.updatedProduct._id;
  console.log(idnew);
  console.log("====================================");
  console.log("====================================");
  console.log(product);
  try {
    const edit = await Product.findOne({ _id: idnew });
    console.log("hi");
    console.log(edit);
    edit.name = product.name;
    edit.price = product.price;
    edit.category = product.category;
    edit.description = product.description;
    edit.brand = product.brand;
    edit.countInStock = product.countInStock;

    const new1 = await edit.save();
    res.status(200).send("Product edited successfully");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/products/addseeds", async (req, res) => {
  const { product } = req.body;
  console.log(req.body);
  try {
    const addSeed = new Seed({
      breeder: product.id,
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

module.exports = router;
