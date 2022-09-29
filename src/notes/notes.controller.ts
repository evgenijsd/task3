import { Controller, Get, Param, Post, Delete, Patch, Body, Put, Req } from '@nestjs/common';
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

    @Patch('/archive/:id')
    archiveById(@Param('id') id: string): Note {
        return  this.notesService.archiveById(id)
    }

    @Patch('/restore/:id')
    restoreById(@Param('id') id: string): Note {
        return  this.notesService.restoreById(id)
    }

    @Patch('notes/archive')
    archiveAll(): Note[] {
        return  this.notesService.archiveAll()
    }

    @Patch('notes/restore')
    restoreAll(): Note[] {
        return  this.notesService.restoreAll()
    }

    @Delete('notes/archive')
    removeAllToggle(): Note[] {
        return  this.notesService.removeAllNotes()
    }

    @Delete('notes/restore')
    removeAllArchive(): Note[] {
        return  this.notesService.removeAllArchive()
    }
}
