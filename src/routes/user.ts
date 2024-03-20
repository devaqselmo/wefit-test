import { Router } from 'express';

import { postUser } from '@controllers/user';

const userRoutes = Router();

userRoutes.post('/', postUser);

export default userRoutes;
