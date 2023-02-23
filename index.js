const express = require("express");
const bodyParser = require("body-parser");
const client = require("./client");

// Setup API
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.get("/products", async (_, res) => {
  const products = await client.getProducts();
  res.send(products);
});

app.get("/products/:productId", async (req, res) => {
  const productId = req.params.productId;
  const product = await client.getProductById(productId);
  res.send(product);
});

// Start server
app.listen(port, () => {
  console.log(`Servidor está executando na porta ${port}.`);
});

// app.get("/user/:userId/purchase", (req, res) => {
//   // let conv = req.query.id.map((id) => getProduto(id)
//   // ({ id: Number(id), price: Math.random() * 100 })
//   // );
//   res.send({ params: req.params, query: req.query });
// });
