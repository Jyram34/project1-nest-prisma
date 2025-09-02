import { IsNotEmpty, IsString } from "class-validator";

export class CreateAddressDto{
    @IsString()
    @IsNotEmpty()
    street
    : string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsString()
    @IsNotEmpty()
    zipCode: string;

    @IsNotEmpty()
    userId: number;
}