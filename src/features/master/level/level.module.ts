import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';
import { CrudService } from 'src/service/crud.service';
import { PrismaService } from 'src/service/prisma.service';

@Module({
  controllers: [LevelController],
  providers: [
    LevelService,
    CrudService,
    PrismaService,
    {
      provide: 'model', // this can be a symbol or a string
      useValue: 'level',
    },
  ],
})
export class LevelModule {
  protected model: string;
}
