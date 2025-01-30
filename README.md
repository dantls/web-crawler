# API - Top Filmes Rotten Tomatoes
Esta é uma API simples construída com Node.js e Express que retorna os melhores filmes do site Rotten Tomatoes, com base em uma consulta de número de filmes. A aplicação faz scraping da página de "Best of Rotten Tomatoes" usando a biblioteca Cheerio.

## Funcionalidades
- **Rota principal (`/`)**: Retorna uma lista de filmes do top de Rotten Tomatoes.
- O número de filmes a ser retornado é especificado através do parâmetro de consulta `top`.

## Requisitos
- Node.js (versão 12 ou superior)
- NPM (gerenciador de pacotes do Node)

## Instalação
1. Clone este repositório:
   `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
2. Acesse o diretório do projeto:
   `cd nome-do-repositorio`
3. Instale as dependências:
   `npm install`

## Uso
1. Inicie o servidor:
   `npm start`
2. Acesse a API através de seu navegador ou cliente HTTP (como o Postman ou cURL):
   - Exemplo de requisição: `GET http://localhost:3000/?top=5`
   - A consulta `top=5` retornará os 5 filmes mais bem classificados de acordo com o Rotten Tomatoes.

## Exemplo de Resposta
Para uma consulta como `GET /?top=3`, a resposta será algo como:


## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework minimalista para criar o servidor HTTP.
- **Cheerio**: Biblioteca para scraping de dados HTML.
- **Request**: Para fazer requisições HTTP.

## Contribuições
Contribuições são bem-vindas! Se você encontrar algum erro ou tiver uma sugestão de melhoria, sinta-se à vontade para abrir uma *issue* ou fazer um *pull request*.

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
