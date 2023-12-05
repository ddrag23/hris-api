import { IsNotEmpty, IsEmail, MinLength, IsNumber } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsNumber()
  role_id: number;
}
