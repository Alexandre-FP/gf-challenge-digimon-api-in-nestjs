<p align="center">
  <a href="https://en.wikipedia.org/wiki/Digimon" target="blank"><img src="https://i.pinimg.com/564x/56/01/98/560198dcd2399182312e0828ebb6bf2e.jpg" width="400" alt="Digimon Logo" /></a>
</p>

# Digimon Api

# Descrição do desafio:

Este é um serviço de API desenvolvido para o desafio técnico da [Global Financeiro](https://globalfinanceiro.com.br/). Utilizou-se a seguinte tecnologia: Fastify, Prisma ORM, Zod e PostgreSQL para o banco de dados, permitindo que os dados provenientes da API [Digimon](https://digimon-api.vercel.app/api/digimon) sejam persistidos no banco de dados.

# Instruções:

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/)
- [Nest.js](https://docs.nestjs.com/)
- [Docker](https://www.docker.com/get-started)
- [npm](https://www.npmjs.com/get-npm) (geralmente incluído com o Node.js)

Siga estes passos para configurar e executar o projeto:

1. **Instalar Dependências**
   ```bash
   npm i
   ```
   Este comando instalará todas as dependências necessárias para o projeto.

2. **Configurações de variáveis de ambiente**
   ```bash
    cp .env.example .env
   ```
   comando cp .env.example .env copia o arquivo .env.example e cria uma nova cópia dele chamada .env no mesmo diretório.

3. **Iniciar Contêineres Docker**
   ```bash
   docker-compose up -d
   ```
   Este comando iniciará os contêineres Docker necessários em segundo plano.

4. **Executar Migrações Prisma**
   ```bash
   npm run prisma:db
   ```
   Este comando executará as migrações do Prisma para configurar o esquema do banco de dados.

5. **Popular o Banco de Dados**
   ```bash
   npm run db:seed
   ```
   Este comando irá popular o banco de dados com dados iniciais.

6. **Iniciar o Servidor de Desenvolvimento**
   ```bash
   npm run start:dev
   ```
   Este comando iniciará o servidor de desenvolvimento.

7. **Vizualizar os dados persistindos no banco de dados**
   ```bash
   npm run prisma:studio,
   ```
   Este comando iniciará o servidor de desenvolvimento.

8. **A API está executando na porta 3000**
   ```bash
   http://localhost:3000/digimons
   ```
9. **A aplicação tem as seguintes rotas**
   ```bash 
   http://localhost:3000/digimon/name/:name

   http://localhost:3000/digimon/level/:level

   http://localhost:3000/digimon/:id
Agora você deve ser capaz de acessar a aplicação na porta especificada no seu arquivo `.env`.