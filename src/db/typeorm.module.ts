import { Module } from '@nestjs/common'
import { TypeOrmModule as NestTypeOrmModule } from '@nestjs/typeorm'


@Module({
  imports: [
    NestTypeOrmModule.forRoot({
      type: 'postgres',
      host: 'task3-db-1',
      port: 5432,
      username: 'admin',
      password: '1234567',
      database: process.env.POSTGRES_DATABASE,
      entities: [ 'dist/entities/**/*.entity.js' ],
      synchronize: true,
      // migrations: [ 'dist/db/migrations/**/*.js' ],
      // cli: { migrationsDir: 'src/db/migrations' },
    })
  ]
})
export class TypeOrmModule {}
