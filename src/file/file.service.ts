import { Injectable } from '@nestjs/common';
import { FileDTO } from './dtos/file';

@Injectable()
export class FileService {
    async file(data: FileDTO) {
        console.log({ data })
        
        return 'file';
    }
}
