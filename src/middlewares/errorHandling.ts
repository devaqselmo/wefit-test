import { type NextFunction, type Request, type Response } from 'express';

import HttpStatusValues from '@enums/httpStatus';
import BadRequestException from '@errors/badRequest';
import InternalServerException from '@errors/internalServer';

interface BadRequestExceptionProps {
  target: any;
  property: string;
  children: any[];
  constraints: any;
}

interface BadRequestExceptionResponse {
  campo: string;
  mensagem: string;
}

const errorHandling = (
  err: InternalServerException | BadRequestException,
  _: Request,
  response: Response,
  next: NextFunction,
): Response<any> => {
  if (err instanceof InternalServerException) {
    return response.status(err.statusCode).json(err);
  }

  if (err instanceof BadRequestException) {
    if (err.fieldValidation) {
      const errors: BadRequestExceptionResponse[] = [];
      const validationErrors = JSON.parse(err.message);

      validationErrors.map(
        (value: BadRequestExceptionProps): number | undefined => {
          if (value.constraints !== undefined) {
            const [message] = Object.keys(value.constraints);

            return errors.push({
              campo: value.property,
              mensagem: value.constraints[message],
            });
          } else if (value.children !== undefined) {
            if (value.children.length > 0) {
              value.children.map(value => {
                if (value.constraints !== undefined) {
                  const [message] = Object.keys(value.constraints);

                  return errors.push({
                    campo: value.property,
                    mensagem: value.constraints[message],
                  });
                } else {
                  return errors.push({
                    campo: value.property,
                    mensagem: `invalid field: ${value.target}`,
                  });
                }
              });
            } else {
              return errors.push({
                campo: value.property,
                mensagem: value.constraints,
              });
            }
          } else {
            return errors.push({
              campo: value.property,
              mensagem: `invalid field: ${value.target}`,
            });
          }

          return 1;
        },
      );

      return response.status(HttpStatusValues.BAD_REQUEST).json(errors);
    }

    return response.status(HttpStatusValues.BAD_REQUEST).json(err);
  }

  return response
    .status(HttpStatusValues.INTERNAL_SERVER_ERRROR)
    .json(new InternalServerException('Internal Server Error'));
};

export default errorHandling;
