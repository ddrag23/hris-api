import { IsNotEmpty, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateViolationDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => +value)
  allowance_id: number;
  is_premi: boolean;
  salary_cuts_percentage: number;
  salary_cuts_amount: number;
}
