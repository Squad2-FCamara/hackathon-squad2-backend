<h1 align="center">
  <center>Programa de Formação FCamara - Backend Squad 2</center>
</h1>
 
> Status: em andamento

O objetivo do projeto é a construção de um back-end para o Technical Share, cujo front-end [está neste repositório](https://github.com/Squad2-FCamara/hackathon-squad2-frontend).

## 🚀 Tecnologias utilizadas
- NodeJS
- Express
- TypeScript
- Postgres
- Prisma

## 💻 Como rodar

1. Clonar o projeto: 
```
git clone git@github.com:Squad2-FCamara/hackathon-squad2-backend.git
```
2. Entrar na pasta: 
```
cd hackathon-squad2-backend
```
3. Instalar as dependências: 
```
npm install
```
4. Criar conexão com o banco de dados
```
npx prisma db push
``` 
5. Rodar o servidor (abrirá em localhost 4000):
```
npm start
``` 
6. Abrir interface gráfica para visualização do banco de dados
```
npx prisma studio
``` 