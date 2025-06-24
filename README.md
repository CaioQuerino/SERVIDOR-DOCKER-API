# Servidor Express com Docker

![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-18.x-brightgreen?logo=express)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript)
![Docker](https://img.shields.io/badge/Docker-ready-blue?logo=docker)

Este projeto é um exemplo simples de servidor Node.js utilizando Express, configurado para rodar em ambiente Docker.

## 📁 Estrutura do Projeto

```
├── Dockerfile
├── .dockerignore
├── config.ts
├── server.ts
├── package.json
├── tsconfig.json
└── dist/ (gerado após build)
```


## 🚀 Tecnologias

- Node.js
- Express
- TypeScript
- Docker

## ⚙️ Configuração

O arquivo `config.ts` define as configurações do servidor:

```ts
export default {
  server: {
    port: 3333,
    host: "localhost"
  }
}
```

# 🐳 Rodando com Docker

## 1. Build da imagem

```sh
    docker build -t express-docker-server .
```

## 2. Executar o container


```sh
    docker run -p 3333:3333 express-docker-server
```


## 3. Acessar no navegador
- Abra o navegador e vá até:

```sh
    http://localhost:3333/

    ## --> Servidor Docker rodando!

```

# 📦 Scripts disponíveis

npm install - Instala as dependências
npm run build - Compila o TypeScript para JavaScript em dist/
npm start - Inicia o servidor a partir do código compilado

## 📄 .dockerignore
Arquivos/pastas ignorados pelo Docker:

```
    node_nodules
    .gitignore
    Dockerfile
    dist
```

- 💡 Evita copiar arquivos desnecessários para a imagem Docker.

