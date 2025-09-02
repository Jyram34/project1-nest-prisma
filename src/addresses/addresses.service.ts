import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from 'src/dtos/create-address.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Address, User } from '../../generated/prisma';
import { UpdateAddressDto } from 'src/dtos/update-address.dto';

type AddressWithUser = Address & { user: User};
@Injectable()
export class AddressesService {
    constructor(private prisma: PrismaService){}

    //Metodo para crear una direccion
    async create(data: CreateAddressDto): Promise<{message: string; data: Address}>{
        //Verificar si el usuario existe antes de crear una dirección
        const user = await this.prisma.user.findUnique({ where: {id: data.userId}})
        if(!user){
            throw new NotFoundException(`El usuario con ID ${data.userId} no existe`)
        }
        const address = await this.prisma.address.create({data})
        return {
            message: 'Direccion creada con éxito',
            data: address,
        };
    }

    //Metodo para buscar todos los usuarios
    async findAll(): Promise<Address[]>{
        return this.prisma.address.findMany({ include: { user:true } });
    }

    //Metodo para buscar un usuario por ID
    async findOne(id: number): Promise<Address> {
        const address = await this.prisma.address.findUnique({
            where:{id},
            include: {user:true},
        });
        if(!address){
            throw new NotFoundException(`La direccion con ID ${id} no existe`)
        }
        return address;
    }

    async update(id: number, data: UpdateAddressDto): Promise<{ message: string; data: Address }> {
        //Verificar que la dirección exista
        const address = await this.prisma.address.findUnique({ where: { id }});
        if(!address){
            throw new NotFoundException(`La direccion con ID ${id} no existe`);
        }

        //Si mandan userId nuevo, validar que existe ese usuario
        if(data.userId){
            const user = await this.prisma.user.findUnique({ where: { id: data.userId}});
            if(!user){
                throw new BadRequestException(`El usuario con ID ${data.userId} no existe`);
            }
        }
        const updateAddress = await this.prisma.address.update({ where: { id }, data});
        return{
            message: 'Dirreción actualizada con éxito',
            data: updateAddress,
        } 
    }

    async remove(id: number): Promise<{ message: string}> {
        const address = await this.prisma.address.findUnique({ where: {id}});
        if(!address){
            throw new NotFoundException(`No se puede eliminar, la dirección con ID ${id} no existe`);
        }
        const deletedAddress = await this.prisma.address.delete({ where: { id } });

        return{
            message: 'Dirreción eliminada con éxito'
        }
    }
}
