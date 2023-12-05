import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './features/user/user.module';
import { AuthModule } from './features/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './features/auth/guard/auth.guard';
import { PrismaService } from './service/prisma.service';
import { RoleModule } from './features/role/role.module';

@Module({
  imports: [UserModule, AuthModule, RoleModule],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
})
export class AppModule {}
