# GymPass Style API

Este é um projeto de uma aplicação semelhante ao GymPass, que permite aos usuários se cadastrar, autenticar, realizar check-ins em academias e obter informações sobre seu perfil e histórico de check-ins. A aplicação utiliza várias tecnologias e componentes, incluindo GitHub Actions, Vitest para testes unitários e end-to-end, JWT, Fastify, TypeScript, Prisma, PostgreSQL, e Zod.

## Como Executar o Projeto

- Certifique-se de ter o Node.js instalado em sua máquina.
- Clone o repositório do projeto: git clone https://github.com/NatanRei/ntn-api-solid.git
- Instale as dependências do projeto: npm install.
- Configure as variáveis de ambiente, incluindo as informações de conexão com o banco de dados e as chaves JWT.
- Execute a aplicação: npm run start:dev

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário;
- [x] Deve ser possível o usuário obter seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia.


## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto da academia;
- [x] O check-in só pode ser validado até 20 minutos após criado;
- [x] O check-in só pode ser validado por administradores
- [x] A academia só pode ser cadastrada por administradores 

## RNFs (Requisitos não funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (Json Web Token)
