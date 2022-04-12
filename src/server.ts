import express from 'express'
import { routerUser } from './routes/UserRoute';
import { routerProfile } from './routes/ProfileRoute';
import { routerSkill } from './routes/SkillRouter';
import { routerRole } from './routes/RoleRoute';
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routerUser);
app.use(routerProfile);
app.use(routerSkill);
app.use(routerRole);

app.listen(4000, () =>
  console.log('REST API server ready at: http://localhost:4000'),
);