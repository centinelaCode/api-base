import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { routeUsers } from './routes/usersRoutes'

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

// routing express
app.use('/api/usr', routeUsers);


app.listen(PORT, () => console.log(`Server run on Port ${PORT}`))