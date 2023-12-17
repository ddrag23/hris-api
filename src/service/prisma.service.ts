import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PaginationQuery } from 'src/entities/pagination';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  async paginationTransaction(
    model: string,
    pq: PaginationQuery,
    relation?: Object,
    where?: any,
  ): Promise<Object> {
    let start = +pq.skip > 1 ? +pq.skip * +pq.take - +pq.take : 0;
    const totalData = await this[model].count();
    let pages = Math.ceil(totalData / +pq.take);
    console.log(pq);

    const data = await this[model].findMany({
      take: +pq.take,
      skip: start,
      orderBy: {
        [pq.sortBy]: pq.sortType,
      },
      include: relation ? relation : {},
      ...(where && { where }),
    });
    const currentPage = start / +pq.take + 1;
    return {
      data,
      pages,
      currentPage,
      totalData,
    };
  }
}
