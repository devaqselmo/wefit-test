import { validateOrReject } from 'class-validator';

import BadRequestException from '@errors/badRequest';

export default async <T>(
  fields: any,
  Class: new (...args: any) => T,
): Promise<void> => {
  try {
    const fieldModel: T = new Class(fields);

    await validateOrReject(fieldModel as object);
  } catch (err) {
    throw new BadRequestException(JSON.stringify(err), true);
  }
};
