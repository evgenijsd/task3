import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from './db/typeorm.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    NotesModule,
    TypeOrmModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
