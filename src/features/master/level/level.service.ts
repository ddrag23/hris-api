import { Injectable, Inject } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { CrudService } from 'src/service/crud.service';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class LevelService extends CrudService<CreateLevelDto, UpdateLevelDto> {
  constructor(
    protected prisma: PrismaService,
    @Inject('model') model: string,
  ) {
    super(prisma, model);
  }
}
