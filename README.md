# Crawler

Crawler simples para resgate de informações de produtos de diversos sites de e-commerce brasileiros.

## Pré-requisitos

- Node 14+
- Docker 19+
- Docker Compose 1.26+

## Instalação

```bash
yarn install

// OU

npm install
```

Faça uma cópia do arquivo `env.example`. Nomeie essa cópia para `.env`.

## Como usar

Primeiramente, execute os dois comandos abaixo na raíz do projeto:

```bash
docker-compose up -d
yarn start
```

Será disponibilizado o endpoint `POST http://localhost:3001/search` que deve ser enviada uma requisição com o seguinte corpo:

```json
{
  "search": "termo a ser buscado",
  "limit": 50
}
```

- `search` é obrigatório.
- `limit` é opcional.

Um exemplo utilizando cURL:

```bash
curl --location --request POST 'localhost:3001/search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "search": "cadeira presidente"
}'
```

## Testes

Para executar os testes, é necessário criar o arquivo `.env.test` na raíz do projeto. Faça uma cópia do `.env` criado anteriormente.
É recomendado apenas alterar o nome do banco de dados para que não utilize a versão de desenvolvimento.

Feito isso, execute o comando:

```bash
yarn test
```

## Contribuição

Toda contribuição neste projeto é bem vinda. Para isso, você pode abrir uma issue ou enviar um Pull Request. Fique a vontade!

## Todo

- [ ] Resgate de produtos de outros e-commerce brasileiros (Magazine Luiza, Casas Bahia, Amazon BR, etc).
- [ ] Atualização periódica dos dados dos produtos (Redis ou similar).
