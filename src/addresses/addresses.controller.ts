import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Patch } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from 'src/dtos/create-address.dto';
import { UpdateAddressDto } from 'src/dtos/update-address.dto';

@Controller('addresses')
export class AddressesController {
    constructor(private readonly addressesService: AddressesService){}

    @Post()
    create(@Body() dto: CreateAddressDto){
        return this.addressesService.create(dto);
    }

    @Get()
    findAll(){
        return this.addressesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.addressesService.findOne(Number(id));
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateAddressDto){
        return this.addressesService.update(Number(id), dto);
    }

    @Patch(':id')
    patch(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateAddressDto){
        return this.addressesService.update(id,dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.addressesService.remove(Number(id));
    }
}
