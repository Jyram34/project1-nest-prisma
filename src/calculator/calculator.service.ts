import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
    //Funcion para sumar dos numeros
    add(a:number, b:number): number{
        return a + b;
    }
    //Funcion para restar dos numeros
    subtract(a:number, b:number):  number{
        return a - b;
    }
    //Funcion para multiplicar dos numeros
    multiply(a:number, b:number): number{
        return a * b;
    }
    //Funcion para dividir dos numeros
    divide(a:number, b:number): number{
        if(b === 0){
            throw new BadRequestException('No se puede dividir entre cero');
        }
        return a / b;
    }

}
