import { CreateUserDto } from "src/dtos/create-user.dto";
import { User, Prisma } from '../../generated/prisma';

export interface IUsers{
    createUser(data: CreateUserDto): Promise<User>;
}