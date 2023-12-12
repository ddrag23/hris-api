import { Injectable, Inject } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { CrudService } from 'src/service/crud.service';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class PositionService extends CrudService<
  CreatePositionDto,
  UpdatePositionDto
> {
  constructor(
    protected prisma: PrismaService,
    @Inject('model') model: string,
  ) {
    super(prisma, model);
  }
}
