import { Module } from '@nestjs/common'
import { TypeOrmModule as NestTypeOrmModule } from '@nestjs/typeorm'
import { NoteBase } from './note.entity'


@Module({
  imports: [
    NestTypeOrmModule.forRoot({
      type: 'postgres',
      host: 'task3-db-1',
      port: 5432,
      username: 'admin',
      password: '1234567',
      database: 'db',
      entities: [ NoteBase ],
      synchronize: true,
      // migrations: [ 'dist/db/migrations/**/*.js' ],
      // cli: { migrationsDir: 'src/db/migrations' },
    })
  ]
})
export class TypeOrmModule {}
