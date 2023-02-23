const axios = require("axios");
const listaDeUsers = "https://mockend.com/juunegreiros/BE-test-api/users";

const getUsers = async () => {
  const resp = await axios
    .get(listaDeUsers)
    .then((response) => response.data)
    .catch((error) => console.error(error));
  return resp;
};

const main = async () => {
  const bla = await getUsers();
  console.log(bla);
};

main();
