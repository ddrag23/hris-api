import { PrismaService } from './prisma.service';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class CrudService<T, K> {
  relation: Object | undefined;
  detailRelation: Object | undefined;
  constructor(
    protected prisma: PrismaService,
    @Inject('model') protected model: string,
  ) {}
  create(createPositionDto: T) {
    return this.prisma[this.model].create({ data: createPositionDto });
  }

  findAll() {
    return this.prisma[this.model].findMany(
      this.relation ? { include: { ...this.relation } } : {},
    );
  }

  findOne(id: number) {
    const include = this.detailRelation
      ? { include: { ...this.relation } }
      : {};
    return this.prisma[this.model].findUnique({ where: { id }, ...include });
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
