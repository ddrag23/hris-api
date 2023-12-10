import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { CrudService } from 'src/service/crud.service';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [CityController],
  providers: [
    CityService,
    PrismaService,
    CrudService,
    {
      provide: 'model', // this can be a symbol or a string
      useValue: 'city',
    },
  ],
})
export class CityModule {}
