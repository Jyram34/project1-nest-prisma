import { Body, Controller, Post, Param, UsePipes, ValidationPipe, BadRequestException } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorDto } from 'src/dtos/calculator.dto';



@Controller('calculator')
export class CalculatorController {
    constructor(private readonly calculatorService:CalculatorService){}

    @Post(':operation')
    @UsePipes(new ValidationPipe())
    calculute(
        @Param('operation') operation: string,
        @Body() body: CalculatorDto,
    ): number {
        const { a, b } = body;

        switch(operation.toLowerCase()){
            case 'add':
                return this.calculatorService.add(Number(a), Number(b));
            case 'subtract':
                return this.calculatorService.subtract(Number(a), Number(b));
            case 'multiply':
                return this.calculatorService.multiply(Number(a), Number(b));
            case 'divide':
                return this.calculatorService.divide(Number(a), Number(b));
            default:
                throw new BadRequestException('Operacion no soportada');
        }
    }
}