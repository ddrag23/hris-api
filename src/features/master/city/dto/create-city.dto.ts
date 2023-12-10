import { IsNotEmpty, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateCityDto {
  @IsNotEmpty()
  code: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => +value)
  province_id: number;
}
