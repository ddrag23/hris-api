import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { PaginationQuery } from 'src/entities/pagination';
import { ResponseMessage } from 'src/decorators/resonse_message.decorator';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  @ResponseMessage('Kota/Kabupaten berhasil disimpan')
  create(@Body() createCityDto: CreateCityDto) {
    return this.cityService.create(createCityDto);
  }

  @Get()
  findAllPaginate(@Query() pq: PaginationQuery) {
    return this.cityService.findPaginate(pq);
  }

  @Get('/all')
  @ResponseMessage('OKE')
  findAll(@Query() filter?: { condition: string }) {
    return this.cityService.findAll(filter && JSON.parse(filter.condition));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cityService.findOne(+id);
  }

  @Patch(':id')
  @ResponseMessage('Kota/Kabupaten berhasil diupdate')
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.cityService.update(+id, updateCityDto);
  }

  @Delete(':id')
  @ResponseMessage('Kota/Kabupaten berhasil dihapus')
  remove(@Param('id') id: string) {
    return this.cityService.remove(+id);
  }
}
