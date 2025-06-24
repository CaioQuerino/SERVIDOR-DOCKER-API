import express, { Request, Response } from "express";
import config from "./config.js";

const app = express();

app.get("/", (request: Request, response: Response) => {
    response.status(200).end("Servidor Docker rodando!")
})

app.listen(config.server.port, () => {
  console.log(`Servidor rodando na porta ${config.server.port}`);
});