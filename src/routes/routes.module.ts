import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { master } from 'src/features/master/master.routes';
import { settings } from 'src/features/setting/setting.routes';
const routes = [...master, ...settings];
@Module({
  imports: [RouterModule.register(routes)],
  exports: [RouterModule],
})
export class RoutesModule {}
