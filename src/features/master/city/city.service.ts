import { Injectable, Inject } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { CrudService } from 'src/service/crud.service';
import { PrismaService } from 'src/service/prisma.service';
import { CreateProvinceDto } from '../province/dto/create-province.dto';
import { UpdateProvinceDto } from '../province/dto/update-province.dto';

@Injectable()
export class CityService extends CrudService<
  CreateProvinceDto,
  UpdateProvinceDto
> {
  constructor(
    protected prisma: PrismaService,
    @Inject('model') model: string,
  ) {
    super(prisma, model);
  }
}
