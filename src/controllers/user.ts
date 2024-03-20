import { type NextFunction, type Request, type Response } from 'express';

import type User from '@models/user';
import { create } from '@services/user';

export const postUser = async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response<User> | void> => {
  try {
    const user = await create(request.body);

    return response.json(user);
  } catch (error) {
    next(error);
  }
};
