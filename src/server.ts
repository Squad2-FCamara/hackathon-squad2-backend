import express from 'express'
import { router } from './routes';
const cors = require('cors')

const app = express()

app.use(cors())
app.use(router);

app.listen(4000, () =>
  console.log('REST API server ready at: http://localhost:4000'),
)