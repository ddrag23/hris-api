import { IsNotEmpty, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateDistrictDto {
  @IsNotEmpty()
  code: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => +value)
  city_id: number;
}
