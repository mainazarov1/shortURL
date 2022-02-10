import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateLinkDto, FindOneLinkDto, UpdateLinkDto } from './dto';
import { LinkService } from './link.service';
@ApiTags('Link')
@Controller('link')
export class LinkController {
  constructor(private readonly service: LinkService) {}
  @Get()
  @ApiOkResponse({ type: [CreateLinkDto] })
  async findAll() {
    return await this.service.findAll();
  }
  @Get(':id')
  @ApiBadRequestResponse({ description: 'Validation issues' })
  @ApiNotFoundResponse()
  async findOne(@Param() { id }: FindOneLinkDto) {
    return await this.service.findOne(id);
  }
  @Post()
  @ApiCreatedResponse({ type: CreateLinkDto })
  @ApiConflictResponse({ description: 'Task already exist!' })
  async create(@Body() dto: CreateLinkDto) {
    return await this.service.create(dto);
  }
  @Put(':id')
  @ApiNotFoundResponse()
  async update(@Param() { id }: FindOneLinkDto, @Body() dto: UpdateLinkDto) {
    return await this.service.update(id, dto);
  }
  @Delete(':id')
  @ApiNotFoundResponse()
  async delete(@Param() { id }: FindOneLinkDto) {
    return await this.service.delete(id);
  }
}