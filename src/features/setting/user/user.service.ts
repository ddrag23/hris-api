import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/service/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const hashPass = await hash(createUserDto.password, 10);
    const form = { ...createUserDto, password: hashPass, is_active: true };
    return this.prisma.user.create({
      data: form,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findFirst({
      where: { id },
      include: { role: true },
    });
  }

  findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: { email },
      include: { role: true },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
