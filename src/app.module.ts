import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './features/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './features/auth/guard/auth.guard';
import { PrismaService } from './service/prisma.service';
import { PositionModule } from './features/master/position/position.module';
import { LevelModule } from './features/master/level/level.module';
import { AllowanceModule } from './features/master/allowance/allowance.module';
import { DevisionModule } from './features/master/devision/devision.module';
import { ProvinceModule } from './features/master/province/province.module';
import { CityModule } from './features/master/city/city.module';
import { DistrictModule } from './features/master/district/district.module';
import { ViolationModule } from './features/master/violation/violation.module';
import { UserModule } from './features/setting/user/user.module';
import { RoleModule } from './features/setting/role/role.module';
import { EmployeeModule } from './features/setting/employee/employee.module';
import { MasterModule } from './features/master/master.module';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    RoleModule,
    PositionModule,
    LevelModule,
    AllowanceModule,
    DevisionModule,
    ProvinceModule,
    CityModule,
    DistrictModule,
    ViolationModule,
    EmployeeModule,
    MasterModule,
    RoutesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    { provide: APP_GUARD, useClass: AuthGuard },
  ],
})
export class AppModule {}
