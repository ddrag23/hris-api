import { Routes } from '@nestjs/core';
import { SettingModule } from './setting.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { EmployeeModule } from './employee/employee.module';

export const settings: Routes = [
  {
    path: 'setting',
    module: SettingModule,
    children: [
      {
        path: '/',
        module: UserModule,
      },
      {
        path: '/',
        module: RoleModule,
      },
      {
        path: '/',
        module: EmployeeModule,
      },
    ],
  },
];
