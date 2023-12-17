import { Inject, Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { CrudService } from 'src/service/crud.service';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class DistrictService extends CrudService<
  CreateDistrictDto,
  UpdateDistrictDto
> {
  constructor(
    protected prisma: PrismaService,
    @Inject('model') model: string,
  ) {
    super(prisma, model);
    this.relation = {city:true}
  }
}
