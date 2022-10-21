import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/transfers.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/',usersRoutes);

app.get('/',(req, res)=> res.send('Transfer Service API'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
