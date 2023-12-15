import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DevisionService } from './devision.service';
import { CreateDevisionDto } from './dto/create-devision.dto';
import { UpdateDevisionDto } from './dto/update-devision.dto';

@Controller('division')
export class DevisionController {
  constructor(private readonly devisionService: DevisionService) {}

  @Post()
  create(@Body() createDevisionDto: CreateDevisionDto) {
    return this.devisionService.create(createDevisionDto);
  }

  @Get()
  findAll() {
    return this.devisionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devisionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDevisionDto: UpdateDevisionDto,
  ) {
    return this.devisionService.update(+id, updateDevisionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devisionService.remove(+id);
  }
}
