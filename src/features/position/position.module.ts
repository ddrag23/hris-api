import { Module } from '@nestjs/common';
import { PositionService } from './position.service';
import { PositionController } from './position.controller';
import { PrismaService } from '../../service/prisma.service';
import { CrudService } from 'src/service/crud.service';

@Module({
  controllers: [PositionController],
  providers: [
    PositionService,
    PrismaService,
    CrudService,
    {
      provide: 'model', // this can be a symbol or a string
      useValue: 'position',
    },
  ],
})
export class PositionModule {}
