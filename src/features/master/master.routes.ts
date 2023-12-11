import { Routes } from '@nestjs/core';
import { MasterModule } from './master.module';
import { AllowanceModule } from './allowance/allowance.module';
import { ProvinceModule } from './province/province.module';
import { DistrictModule } from './district/district.module';
import { CityModule } from './city/city.module';
import { ViolationModule } from './violation/violation.module';
import { DevisionModule } from './devision/devision.module';
import { PositionModule } from './position/position.module';
import { LevelModule } from './level/level.module';

export const master: Routes = [
  {
    path: 'master',
    module: MasterModule,
    children: [
      {
        path: '/',
        module: AllowanceModule,
      },
      {
        path: '/',
        module: ProvinceModule,
      },
      {
        path: '/',
        module: DistrictModule,
      },
      {
        path: '/',
        module: CityModule,
      },
      {
        path: '/',
        module: ViolationModule,
      },
      {
        path: '/',
        module: DevisionModule,
      },
      {
        path: '/',
        module: PositionModule,
      },
      {
        path: '/',
        module: LevelModule,
      },
    ],
  },
];
