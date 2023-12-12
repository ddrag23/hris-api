import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [UserModule, RoleModule, EmployeeModule],
})
export class SettingModule {}
