import { Body, Controller, Post,UsePipes, ValidationPipe } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorDto } from 'src/dtos/calculator.dto';



@Controller('calculator')
export class CalculatorController {
    constructor(private readonly calculatorService:CalculatorService){}

    @Post('add')
    @UsePipes(new ValidationPipe())
    add(@Body() body: CalculatorDto): number{
        return this.calculatorService.add(Number(body.a), Number(body.b));
    }

    @Post('subtract')
    @UsePipes(new ValidationPipe())
    subtract(@Body() body: CalculatorDto): number{
        return this.calculatorService.subtract(Number(body.a), Number(body.b));
    }

    @Post('multiply')
    @UsePipes(new ValidationPipe())
    multiply(@Body() body: CalculatorDto): number{
        return this.calculatorService.multiply(Number(body.a), Number(body.b));
    }

    @Post('divide')
    @UsePipes(new ValidationPipe())
    divide(@Body() body: CalculatorDto): number{
        return this.calculatorService.divide(Number(body.a), Number(body.b));
    }
}