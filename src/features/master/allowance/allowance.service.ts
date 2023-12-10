import { Injectable, Inject } from '@nestjs/common';
import { CreateAllowanceDto } from './dto/create-allowance.dto';
import { UpdateAllowanceDto } from './dto/update-allowance.dto';
import { CrudService } from 'src/service/crud.service';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class AllowanceService extends CrudService<
  CreateAllowanceDto,
  UpdateAllowanceDto
> {
  constructor(
    protected prisma: PrismaService,
    @Inject('model') model: string,
  ) {
    super(prisma, model);
    this.relation = { position: true };
    this.detailRelation = { position: true };
  }
}
