import { Body, Controller, Get, Post } from '@nestjs/common';
import { FileDTO } from './dtos/file';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
    constructor(private fileService: FileService) {}

    @Get()
    teste() {
        return 'funcionando';
    }

    @Post('new')
    async postFile(@Body() body: FileDTO) {
        await this.fileService.file(body);

        return body;
    }
}
