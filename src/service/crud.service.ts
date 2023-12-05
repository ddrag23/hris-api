import { PrismaService } from './prisma.service';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class CrudService<T, K> {
  constructor(
    protected prisma: PrismaService,
    @Inject('model') protected model: string,
  ) {}
  create(createPositionDto: T) {
    return this.prisma[this.model].create({ data: createPositionDto });
  }

  findAll() {
    return this.prisma[this.model].findMany();
  }

  findOne(id: number) {
    return this.prisma[this.model].findUnique({ where: { id } });
  }

  update(id: number, updatePositionDto: K) {
    return this.prisma[this.model].update({
      where: { id },
      data: updatePositionDto,
    });
  }

  remove(id: number) {
    return this.prisma[this.model].delete({ where: { id } });
  }
}
