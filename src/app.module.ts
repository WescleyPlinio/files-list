import { Module } from '@nestjs/common';
import { FilesModule } from './files/files.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true,
      autoLoadEntities: true,
    }),
    FilesModule
  ],
  // controllers: [FileController],
  // providers: [FileService],
})
export class AppModule { }