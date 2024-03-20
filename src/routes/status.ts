import { Router } from 'express';

const statusRoutes = Router();

statusRoutes.get('/', (_, response) => {
  return response.send('pong');
});

export default statusRoutes;
