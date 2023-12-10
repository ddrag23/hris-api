import { Module } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { ProvinceController } from './province.controller';
import { PrismaService } from 'src/service/prisma.service';
import { CrudService } from 'src/service/crud.service';

@Module({
  controllers: [ProvinceController],
  providers: [
    ProvinceService,
    PrismaService,
    CrudService,
    {
      provide: 'model', // this can be a symbol or a string
      useValue: 'province',
    },
  ],
})
export class ProvinceModule {}
