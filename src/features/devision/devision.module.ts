import { Module } from '@nestjs/common';
import { DevisionService } from './devision.service';
import { DevisionController } from './devision.controller';
import { PrismaService } from 'src/service/prisma.service';
import { CrudService } from 'src/service/crud.service';

@Module({
  controllers: [DevisionController],
  providers: [
    DevisionService,
    PrismaService,
    CrudService,
    {
      provide: 'model', // this can be a symbol or a string
      useValue: 'divisi',
    },
  ],
})
export class DevisionModule {}
