import { Module } from '@nestjs/common';
import { FileModule } from './file/file.module';
import { FileController } from './file/file.controller';
import { FileService } from './file/file.service';
import { FilesModule } from './files/files.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}']
    }),
    FilesModule
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class AppModule { }