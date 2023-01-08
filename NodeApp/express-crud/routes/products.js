var express = require('express');
const Product = require('../models/product');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let products = await Product.find();
  res.render('products/list', {title: "Products in DataBase", products});
});

router.get('/add', async function(req, res, next) {
  let products = await Product.find();
  res.render('products/add');
});

router.post('/add', async function(req, res, next) {
  let product = new Product(req.body);
  await product.save();
  res.redirect("/products");
});

router.get("/delete/:id", async function (req, res, next) {
  let product = await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});

router.get("/edit/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  res.render("products/edit", { product });
});

router.post("/edit/:id", async function (req, res, next) {
  let product = await Product.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  await product.save();
  res.redirect("/products");
});


module.exports = router;
