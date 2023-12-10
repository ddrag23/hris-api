import { IsNotEmpty } from 'class-validator';

export class CreateProvinceDto {
  @IsNotEmpty()
  code: string;
  @IsNotEmpty()
  name: string;
}
