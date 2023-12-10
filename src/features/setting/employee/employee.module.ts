import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { PrismaService } from 'src/service/prisma.service';
import { CrudService } from 'src/service/crud.service';

@Module({
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    PrismaService,
    CrudService,
    {
      provide: 'model', // this can be a symbol or a string
      useValue: 'employee',
    },
  ],
})
export class EmployeeModule {}
