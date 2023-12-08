import { IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateDevisionDto {
  @IsNotEmpty()
  name: string;
}
