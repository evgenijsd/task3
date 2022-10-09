import { Module } from "@nestjs/common";
import { TypeOrmModule } from "src/db/typeorm.module";
import { NotesController } from "./notes.controller";
import { NotesService } from "./notes.service";

@Module({
    imports: [TypeOrmModule]
    providers: [NotesService],
    controllers: [NotesController]
})

export class NotesModule {

}