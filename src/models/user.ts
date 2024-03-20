import { IsEmail, IsIn, IsNotEmpty, IsPhoneNumber } from 'class-validator';

import type UserDTO from '@dto/user';

export default class User {
  constructor(data: UserDTO) {
    this.name = data.name;
    this.document = data.document;
    this.type = data.type;
    this.cnpj = data.cnpj;
    this.phone = data.phone;
    this.fax = data.fax;
    this.email = data.email;
    this.zipCode = data.zipCode;
    this.address = data.address;
    this.number = data.number;
    this.complement = data.complement;
    this.district = data.district;
    this.city = data.city;
    this.state = data.state;
  }

  id: number;

  @IsNotEmpty({ message: "field 'name' is required" })
  name: string;

  @IsNotEmpty({ message: "field 'document' is required" })
  document: string;

  @IsNotEmpty({ message: "field 'number' is required" })
  @IsIn([1, 2], { message: 'invalid user type' })
  type: number;

  cnpj: string | null;

  @IsNotEmpty({ message: "field 'phone' is required" })
  @IsPhoneNumber('BR', { message: 'invalid phone number' })
  phone: string;

  fax: string | null;

  @IsNotEmpty({ message: "field 'email' is required" })
  @IsEmail({}, { message: 'invalid email' })
  email: string;

  @IsNotEmpty({ message: "field 'zipCode' is required" })
  zipCode: string;

  @IsNotEmpty({ message: "field 'address' is required" })
  address: string;

  @IsNotEmpty({ message: "field 'number' is required" })
  number: string;

  complement: string | null;

  @IsNotEmpty({ message: "field 'district' is required" })
  district: string;

  @IsNotEmpty({ message: "field 'city' is required" })
  city: string;

  @IsNotEmpty({ message: "field 'state' is required" })
  state: string;

  createdAt: Date;
  updatedAt: Date;
}
