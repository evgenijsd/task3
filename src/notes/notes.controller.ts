import { Controller, Get, Param, Post, Delete, Patch, Body, Put } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';
import { Note } from './shemas/note.type';

@Controller('notes')
export class NotesController {

    constructor(private readonly notesService: NotesService) {

    }

    @Get()
    getAll(): Note[] {
        return  this.notesService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: string): Note {
        return this.notesService.getById(id)
    }

    @Post()
    create(@Body() createNoteDto: CreateNoteDto): Note {
        return this.notesService.create(createNoteDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Note {
        return this.notesService.delete(id)
    }

    @Patch(':id')
    update(@Body() updateNoteDto: UpdateNoteDto, @Param('id') id: string): Note {
        return this.notesService.update(id, updateNoteDto)
    }
}
