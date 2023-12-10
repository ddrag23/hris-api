import { Module } from '@nestjs/common';
import { ViolationService } from './violation.service';
import { ViolationController } from './violation.controller';
import { PrismaService } from 'src/service/prisma.service';
import { CrudService } from 'src/service/crud.service';

@Module({
  controllers: [ViolationController],
  providers: [
    ViolationService,
    PrismaService,
    CrudService,
    {
      provide: 'model', // this can be a symbol or a string
      useValue: 'violation',
    },
  ],
})
export class ViolationModule {}
