import express from 'express';

import errorHandling from '@middlewares/errorHandling';
import statusRoutes from '@routes/status';
import userRoutes from '@routes/user';

const app = express();

// default middlewares
app.use(express.json());
// app.use(cors())

// routes
app.use('/users', userRoutes);
app.use('*', statusRoutes);

// other middlewares
app.use(errorHandling);

export default app;
