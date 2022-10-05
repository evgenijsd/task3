import { Controller, Get, Param, Post, Delete, Patch, Body, Put, Req, ParseIntPipe, UsePipes } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { JoiValidationPipe } from './dto/joi-validation.pipe';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';
import { createNoteSchema } from './schemas/create-note.schema';
import { Note } from './schemas/note.type';
import { Stat } from './schemas/stats.type';
import { updateNoteSchema } from './schemas/update-note.schema';

@Controller('notes')
export class NotesController {

    constructor(private readonly notesService: NotesService) {

    }

    @Get()
    getAll(): Note[] {
        return  this.notesService.getAll()
    }

    @Get('/stats')
    calculateStats(): Stat[] {
        return  this.notesService.calculateStats()
    }

    @Get(':id')
    getById(@Param('id') id: string): Note {
        return this.notesService.getById(id)
    }

    @Post()
    @UsePipes(new JoiValidationPipe(createNoteSchema))
    create(@Body() createNoteDto: CreateNoteDto): Note {
        return this.notesService.create(createNoteDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Note {
        return this.notesService.delete(id)
    }

    @Patch(':id')
    update(@Body(new JoiValidationPipe(updateNoteSchema)) updateNote: UpdateNoteDto, 
        @Param('id') id: string): Note {
        return this.notesService.update(id, updateNote)
    }

    @Patch('/archive/:id')
    archiveById(@Param('id') id: string): Note {
        return  this.notesService.archiveById(id)
    }

    @Patch('/restore/:id')
    restoreById(@Param('id') id: string): Note {
        return  this.notesService.restoreById(id)
    }

    @Patch('/notes/archive')
    archiveAll(): Note[] {
        return  this.notesService.archiveAll()
    }

    @Patch('/notes/restore')
    restoreAll(): Note[] {
        return  this.notesService.restoreAll()
    }

    @Delete('/notes/archive')
    removeAllToggle(): Note[] {
        return  this.notesService.removeAllNotes()
    }

    @Delete('/notes/restore')
    removeAllArchive(): Note[] {
        return  this.notesService.removeAllArchive()
    }
}
