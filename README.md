<h1 align="center">
  <center>Programa de Formação FCamara - Backend Squad 2</center>
</h1>
 
> Status: em andamento

O objetivo do projeto é a construção de um back-end para o Technical Share, cujo front-end [está neste repositório](https://github.com/Squad2-FCamara/hackathon-squad2-frontend). O Technical Share é um espaço criado para agendar mentorias entre as pessoas do grupo FCamara (os Sangues Laranjas).
Nela, pode-se encontrar especialistas com a habilidade que seja, e assim, marcar a sua mentoria. Além disso, nela, você pode ser o mentor, basta adicionar os horários disponíveis na sua agenda para que as outras pessoas saibam quando você estará disponível. Espero que gostem.

O deploy do back-end foi feito no Heroku e pode ser acessado pelo link: https://fcamara-squad2.herokuapp.com

No repositório do projeto, encontra-se também as requisições usadas no software Insomnia.


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
5. Rodar o servidor (abrirá em localhost 5000):
```
npm start
``` 
6. Abrir interface gráfica para visualização do banco de dados
```
npx prisma studio
``` 
