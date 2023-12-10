import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateAllowanceDto {
  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  @IsNumber()
  position_id: number;
  @IsNotEmpty()
  @IsString()
  name: number;
  @Transform(({ value }) => Number(value))
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
