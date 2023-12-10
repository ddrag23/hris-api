import { PartialType } from '@nestjs/mapped-types';
import { CreateDevisionDto } from './create-devision.dto';

export class UpdateDevisionDto extends PartialType(CreateDevisionDto) {}
