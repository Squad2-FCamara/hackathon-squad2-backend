import express from 'express'
import { routerUser } from './routes/UserRoute';
import { routerProfile } from './routes/ProfileRoute';
import { routerSkill } from './routes/SkillRouter';
import { routerRole } from './routes/RoleRoute';
import cors from 'cors';
// import swaggerUI from 'swagger-ui-express';
// import swaggerDocument from '../swagger.json';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Acess-Control-Allow-Origin","*");
  app.use(cors());
  next();
})
app.use(routerUser);
app.use(routerProfile);
app.use(routerSkill);
app.use(routerRole);
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(process.env.PORT || 5000);
// app.listen(4000, () =>
//   console.log('REST API server ready at: http://localhost:4000'),
// );