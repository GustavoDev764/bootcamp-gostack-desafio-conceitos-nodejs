<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />
<h2 align="center">
  Desafio 02: Conceitos do Node.js
</h2>

<p align="center">
  <img alt="GitHub language count" src="photos/languages.svg">

  <img alt="GitHub top language" src="photos/languages2.svg">

  <img alt="License" src="photos/license.svg">

</p>

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)

## 💻 Projeto

Nesse desafio tinha que cria um CRUD de api de repository, que contem os seguintes atributos:

<ul>
    <li><strong>id:</strong> "uuid"</li>
    <li><strong>title:</strong> "Desafio Node.js"</li>
    <li><strong>url:</strong> "http://github.com/..."</li>
    <li><strong>techs:</strong> ["Node.js", "React", "..."]</li>
    <li><strong>Likes:</strong> 1</li>
</ul>

### Rotas da aplicação

- **`POST /repositories`**: A rota deve receber `title`, `url` e `techs` dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: `{ id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }`; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.

- **`GET /repositories`**: Rota que lista todos os repositórios;

- **`PUT /repositories/:id`**: A rota deve alterar apenas o `title`, a `url` e as `techs` do repositório que possua o `id` igual ao `id` presente nos parâmetros da rota;

- **`DELETE /repositories/:id`**: A rota deve deletar o repositório com o `id` presente nos parâmetros da rota;

- **`POST /repositories/:id/like`**: A rota deve aumentar o número de likes do repositório específico escolhido através do `id` presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;

## ⌨ Como Executar o Projeto:

```bash
# Clonar o repositório
git clone https://github.com/GustavoDev764/bootcamp-gostack-desafio-conceitos-nodejs

# Entrar no diretório
cd bootcamp-gostack-desafio-conceitos-nodejs

# Baixar as dependências
npm i

# Executar o servidor
npm run dev

# Link do servido
http://localhost:3333/
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
