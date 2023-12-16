import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import province from './json/province';
import city from './json/city';
import district from './json/district';
const prisma = new PrismaClient();
async function main() {
  const saltOrRounds = 10;
  const password = 'password';
  const hash = await bcrypt.hash(password, saltOrRounds);
  const provinces = province.map((item) => ({
    code: item.kode_provinsi,
    name: item.nama_provinsi,
  }));
  const cities = city.map((item) => ({
    name: item.nama_kabupaten,
    code: item.kode_kabupaten,
    province_code: item.kode_provinsi,
  }));
  const distrcts = district.map((item) => ({
    name: item.nama_kecamatan,
    city_code: item.kode_kabupaten,
    code: item.kode_kecamatan,
  }));
  console.log(distrcts.length);
  const role = await prisma.role.upsert({
    where: { name: 'Superadmin' },
    update: {},
    create: { name: 'Superadmin' },
  });
  const superadmin = await prisma.user.upsert({
    where: { email: 'superadmin@hris.com' },
    update: {},
    create: {
      email: 'superadmin@hris.com',
      name: 'superadmin',
      role_id: role.id,
      password: hash,
      is_active: true,
    },
  });
  await prisma.$queryRaw`truncate table "public"."districts" RESTART IDENTITY CASCADE  `;
  await prisma.$queryRaw`truncate table "public"."cities" RESTART IDENTITY CASCADE  `;
  await prisma.$queryRaw`truncate table "public"."provinces" RESTART IDENTITY CASCADE  `;
  provinces.forEach(async (item) => {
    await prisma.province.create({
      data: item,
    });
  });
  console.log('province success');

  cities.forEach(async (city) => {
    const province = await prisma.province.findFirst({
      where: { code: city.province_code },
    });
    const provId = province ? province.id : 1;
    await prisma.city.create({
      data: {
        code: city.code,
        name: city.name,
        province_id: provId,
      },
    });
  });
  console.log('city success');

  distrcts.forEach(async (district) => {
    const city = await prisma.city.findFirst({
      where: { code: district.city_code },
    });
    await prisma.district.create({
      data: {
        code: district.code,
        name: district.name,
        city_id: city ? city.id : 1,
      },
    });
  });
  console.log('district success');

  console.log({ superadmin });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
