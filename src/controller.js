const client = require("./client");

const getProducts = async () => await client.getProducts();

const getProductById = async (productId) =>
  await client.getProductById(productId);

const getUsers = async () => await client.getUsers();

const getUserById = async (userId) => await client.getProductById(userId);

const getProductPrice = async (userId, productIds) => {
  const initialSum = 0;

  const { tax } = await client.getUserById(userId);
  const products = await Promise.all(
    productIds.map((id) => client.getProductById(id))
  );

  const productsPrice = products.reduce(
    (priceSum, product) => priceSum + product.price,
    initialSum
  );

  return parseFloat((productsPrice * (tax / 100)).toFixed(2));
};

module.exports = {
  getProducts,
  getProductById,
  getUsers,
  getUserById,
  getProductPrice,
};
