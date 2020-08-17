const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

//Lista
app.get("/repositories", (request, response) => {
  response.status(200).json(repositories);
});

//Cria
app.post("/repositories", (request, response) => {
  const { url, title, techs } = request.body;

  const repositorie = { id: uuid(), title, url, techs, likes: 0 };
  repositories.push(repositorie);
  response.status(200).json(repositorie);
});

//Atualiza
app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { url, title, techs } = request.body;

  let item = repositories.find((item) => item.id == id);
  const itemIndex = repositories.findIndex((item) => item.id == id);

  if (itemIndex < 0) {
    return response.status(400).json({ error: "Elemento não encontrado" });
  }

  item = { ...item, url, title, techs };

  repositories[itemIndex] = item;

  response.status(200).json(item);
});

//Deleta
app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const itemdelete = repositories.findIndex((item) => item.id == id);
  if (itemdelete < 0) {
    return response.status(400).json({ error: "Elemento não encontrado" });
  }
  repositories.splice(itemdelete, 1);

  response.status(204).send();
});

//Add Like
app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const itemIndex = repositories.findIndex((item) => item.id == id);

  if (itemIndex < 0) {
    return response.status(400).json({ error: "Elemento não encontrado" });
  }

  let item = repositories.find((item) => item.id == id);
  item.likes += 1;

  repositories[itemIndex] = item;
  return response.status(200).json(item);
});

module.exports = app;
