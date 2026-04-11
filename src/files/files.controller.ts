import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, NotFoundException } from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { NotFoundError } from 'rxjs';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  create(@Body() createFileDto: CreateFileDto) {
    return this.filesService.create(createFileDto);
  }

  @Get()
  findAll() {
    return this.filesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const developer = await this.filesService.findOne(id);
    if(!developer) throw new NotFoundException();
    return developer
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    const developer = await this.filesService.update(id, updateFileDto);
    if(!developer) throw new NotFoundException();
    return developer
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const developer = await this.filesService.remove(id);
    if(!developer) throw new NotFoundException();
  }
}
