import { Injectable, Inject } from '@nestjs/common';
import { CreateViolationDto } from './dto/create-violation.dto';
import { UpdateViolationDto } from './dto/update-violation.dto';
import { CrudService } from 'src/service/crud.service';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class ViolationService extends CrudService<
  CreateViolationDto,
  UpdateViolationDto
> {
  constructor(
    protected prisma: PrismaService,
    @Inject('model') model: string,
  ) {
    super(prisma, model);
  }
}
