import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';
import { CrudService } from 'src/service/crud.service';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [DistrictController],
  providers: [
    DistrictService,
    CrudService,
    PrismaService,
    {
      provide: 'model', // this can be a symbol or a string
      useValue: 'district',
    },
  ],
})
export class DistrictModule {}
