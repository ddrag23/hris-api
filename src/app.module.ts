import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './features/user/user.module';
import { AuthModule } from './features/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './features/auth/guard/auth.guard';
import { PrismaService } from './service/prisma.service';
import { RoleModule } from './features/role/role.module';
import { PositionModule } from './features/position/position.module';
import { LevelModule } from './features/level/level.module';
import { AllowanceModule } from './features/allowance/allowance.module';
import { DevisionModule } from './features/devision/devision.module';
import { ProvinceModule } from './features/province/province.module';
import { CityModule } from './features/city/city.module';
import { DistrictModule } from './features/district/district.module';
import { ViolationModule } from './features/violation/violation.module';
import { EmployeeModule } from './features/employee/employee.module';

@Module({
  imports: [UserModule, AuthModule, RoleModule, PositionModule, LevelModule, AllowanceModule, DevisionModule, ProvinceModule, CityModule, DistrictModule, ViolationModule, EmployeeModule],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
})
export class AppModule {}
