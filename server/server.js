import express from 'express';
import cors from 'cors';
import orderRoutes from './routes/orderRoutes.js'

import config from './config.js';

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use('/api/orders', orderRoutes);

app.listen(config.port, () =>
  console.log(`Server is live at ${config.hostUrl}`),
);