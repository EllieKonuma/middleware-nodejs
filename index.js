const express = require("express");
const { urlencoded } = require("body-parser");
const client = require("./src/client");
const controller = require("./src/controller");

// Setup API
const port = 3000;
const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.json());

// Define routes
app.get("/products", async (_, res) => {
  const products = await controller.getProducts();
  res.send(products);
});

app.get("/products/:productId", async (req, res) => {
  const { productId } = req.params;
  const product = await controller.getProductById(productId);
  res.send(product);
});

app.get("/users", async (_, res) => {
  const users = await controller.getUsers();
  res.send(users);
});

app.get("/users/:userId", async (req, res) => {
  const { userId } = req.params;
  const user = await controller.getUserById(userId);
  res.send(user);
});

app.post("/users/:userId/purchase", async (req, res) => {
  const { userId } = req.params;
  const productIds = req.body;
  const totalPrice = await controller.getProductPrice(userId, productIds);

  res.send({ total: totalPrice });
});

// Start server
app.listen(port, () => {
  console.log(`Servidor está executando na porta ${port}.`);
});
