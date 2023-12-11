import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { master } from 'src/features/master/master.routes';
const routes = [...master];
@Module({
  imports: [RouterModule.register(routes)],
  exports: [RouterModule],
})
export class RoutesModule {}
