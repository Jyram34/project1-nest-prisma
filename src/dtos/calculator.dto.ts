import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CalculatorDto {
  @IsNotEmpty()
  @IsNumberString()
  a: string;

  @IsNotEmpty()
  @IsNumberString()
  b: string;
}
