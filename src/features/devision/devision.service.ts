import { Injectable, Inject } from '@nestjs/common';
import { CreateDevisionDto } from './dto/create-devision.dto';
import { UpdateDevisionDto } from './dto/update-devision.dto';
import { CrudService } from 'src/service/crud.service';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class DevisionService extends CrudService<
  CreateDevisionDto,
  UpdateDevisionDto
> {
  constructor(
    protected prisma: PrismaService,
    @Inject('model') model: string,
  ) {
    super(prisma, model);
  }
}
