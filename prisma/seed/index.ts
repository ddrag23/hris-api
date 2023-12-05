import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();
async function main() {
  const saltOrRounds = 10;
  const password = 'password';
  const hash = await bcrypt.hash(password, saltOrRounds);
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
