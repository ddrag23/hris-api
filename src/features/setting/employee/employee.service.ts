import { Injectable, Inject } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CrudService } from 'src/service/crud.service';
import { PrismaService } from 'src/service/prisma.service';
import { PaginationQuery } from 'src/entities/pagination';

@Injectable()
export class EmployeeService extends CrudService<
  CreateEmployeeDto,
  UpdateEmployeeDto
> {
  constructor(
    protected prisma: PrismaService,
    @Inject('model') model: string,
  ) {
    super(prisma, model);
  }
  async findPaginate(pq: PaginationQuery) {
    return await this.prisma.paginationTransaction(
      this.model,
      pq,
      this.relation,
    );
  }
}
