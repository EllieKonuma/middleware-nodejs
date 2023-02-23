const { default: axios } = require("axios");
const { response } = require("express");

const apiUrl = "https://mockend.com/juunegreiros/BE-test-api";

const getProducts = async () => {
  const res = await axios
    .get(`${apiUrl}/products`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
  return res;
};

const getProductById = async (id) => {
  const res = await axios
    .get(`${apiUrl}/products/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return res;
};
const getUsers = async () => {};
const getUserById = async () => {};

module.exports = { getUsers, getUserById, getProducts, getProductById };
