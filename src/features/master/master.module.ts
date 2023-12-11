import { Module } from '@nestjs/common';
import { AllowanceModule } from './allowance/allowance.module';
import { CityModule } from './city/city.module';
import { DevisionModule } from './devision/devision.module';
import { LevelModule } from './level/level.module';
import { DistrictModule } from './district/district.module';
import { PositionModule } from './position/position.module';
import { ViolationModule } from './violation/violation.module';

@Module({
  imports: [
    AllowanceModule,
    CityModule,
    DevisionModule,
    LevelModule,
    DistrictModule,
    PositionModule,
    PositionModule,
    ViolationModule,
  ],
})
export class MasterModule {}
