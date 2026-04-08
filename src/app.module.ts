import { Module } from '@nestjs/common';
import { FileModule } from './file/file.module';
import { FileController } from './file/file.controller';
import { FileService } from './file/file.service';

@Module({
  imports: [FileModule],
  controllers: [FileController],
  providers: [FileService],
})
export class AppModule {}