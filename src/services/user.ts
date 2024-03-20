import prisma from '@config/prisma';
import type UserDTO from '@dto/user';
import BadRequestException from '@errors/badRequest';
import fieldValidator from '@helpers/fieldValidator';
import User from '@models/user';

export const create = async (data: UserDTO): Promise<User> => {
  await fieldValidator<User>(data, User);

  const userExists = await prisma.users.findFirst({
    where: {
      OR: [
        { email: data.email },
        { phone: data.phone },
        { document: data.document },
      ],
    },
  });

  if (userExists !== null)
    throw new BadRequestException('user already created');

  const user = await prisma.users.create({
    data: {
      name: data.name,
      type: data.type,
      document: data.document,
      cnpj: data.cnpj,
      email: data.email,
      phone: data.phone,
      fax: data.fax,
      zipCode: data.zipCode,
      address: data.address,
      number: data.number,
      district: data.district,
      complement: data.complement,
      city: data.city,
      state: data.state,
    },
    include: { userTypes: true },
  });

  return user;
};
