import { IsNotEmpty } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  position_id: number;
  @IsNotEmpty()
  division_id: number;
  @IsNotEmpty()
  level_id: number;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  nip: string;
  @IsNotEmpty()
  phone: string;
  @IsNotEmpty()
  npwp: string;
  @IsNotEmpty()
  nik: string;
  @IsNotEmpty()
  jenis_kelamin: string;
  @IsNotEmpty()
  status: string;
  @IsNotEmpty()
  type: string;
  @IsNotEmpty()
  hire_date: Date;
  @IsNotEmpty()
  salary: number;
}
