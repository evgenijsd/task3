import { Injectable } from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
import { Note } from "./shemas/note.type";

@Injectable()
export class NotesService {
    private notes: Note[] =  [
        {
            id: "-NCjit43WsCwmDKhvYg5",
            archive: false,
            category: "Task",
            content: "Tomatoes, bread",
            created: new Date("2022-09-24T13:41:46.382Z"),
            dates: "",
            name: "Shopping list",
            picture: "https://img.icons8.com/bubbles/344/todo-list.png"
        },
        {
            id: "-NCjj01SRKCKWWwE90Xq",
            archive: false,
            category: "Random Thought",
            content: "The evolution theory",
            created: new Date("2022-09-24T13:42:19.127Z"),
            dates: "",
            name: "The theory of evolution",
            picture: "https://img.icons8.com/bubbles/344/speech-bubble.png"
        },
        {
            id: "-NCjjDmUsTddAr3hliOB",
            archive: false,
            category: "Idea",
            content: "Implement new",
            created: new Date("2022-09-27T22:01:14.395Z"),
            dates: "",
            name: "New Feature",
            picture: "https://img.icons8.com/bubbles/344/man-with-idea.png"
        },
        {
            id: "-NCjjTymhbUK7Jfv4Jht",
            archive: false,
            category: "Idea",
            content: "Power doesn't",
            created: new Date("2022-09-24T13:44:21.780Z"),
            dates: "",
            name: "William Gaddis",
            picture: "https://img.icons8.com/bubbles/344/man-with-idea.png"
        },
        {
            id: "-NCjjziGkYUap7omwDOf",
            archive: true,
            category: "Task",
            content: "The Lean Startup",
            created: new Date("2022-09-24T13:47:43.898Z"),
            dates: "",
            name: "Books",
            picture: "https://img.icons8.com/bubbles/344/todo-list.png"
        },
        {
            id: "-NCjktmrogMqKD5qhYaX",
            archive: true,
            category: "Idea",
            content: "Implement new",
            created: new Date("2022-09-24T13:50:33.792Z"),
            dates: "3/5/2021, 5/5/2021",
            name: "New Feature",
            picture: "https://img.icons8.com/bubbles/344/man-with-idea.png"
        },
        {
            id: "-NCvR68--89SGMu0PM8H",
            archive: false,
            category: "Task",
            content: "The Lean Startup",
            created: new Date("2022-09-26T20:24:52.283Z"),
            dates: "",
            name: "Books",
            picture: "https://img.icons8.com/bubbles/344/todo-list.png"
        },
        {
            id: "-NCym2k6RJjU9gn6NUqe",
            archive: false,
            category: "Task",
            content: "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021 2021/5/5/",
            created: new Date("2022-09-27T22:00:47.222Z"),
            dates: "3/5/2021, 5/5/2021, 2021/5/5",
            name: "Dentist",
            picture: "https://img.icons8.com/bubbles/344/todo-list.png"
        },
      ]

    getAll(): Note[] {
        return this.notes
    }

    getById(id: string): Note {
        let note = this.notes.find(x => x.id === id)

        return note
    }

    create(noteDto: CreateNoteDto): Note {
        const note = {
            ...noteDto,
            id: 'id' + Date.now().toString()
        }
        this.notes.push(note)

        return note
    }

    delete(id: string): Note {
        let note = this.notes.find(x => x.id === id)

        if (note) {
            this.notes = this.notes.filter(x => x.id !== id)
        }
        else 

        return note
    }

    update(id: string, noteDto: UpdateNoteDto): Note {
        const note = { ...noteDto, id }

        if (this.notes.find(x => x.id === id)) {
            this.notes = this.notes.map(x => (x.id === id ? note : x))
            return note
        }
        else {
            return this.create(noteDto)
        }
        
    }

    archiveById(id: string): Note {
        let note = this.notes.find(x => x.id === id)

        if (note) {
            note.archive = true
            this.notes.map(x => (x.id === id ? note : x))            
        }

        return note       
    }

    restoreById(id: string): Note {
        let note = this.notes.find(x => x.id === id)

        if (note) {
            note.archive = false
            this.notes.map(x => (x.id === id ? note : x))            
        }
        
        return note       
    }

    archiveAll(): Note[] {
        this.notes.forEach(note => note.archive = true )        

        return this.notes
    }

    restoreAll(): Note[] {
        this.notes.forEach(note => note.archive = false )        

        return this.notes
    }

    removeAllNotes(): Note[] {
        this.notes = this.notes.filter(note => !note.archive) 

        return this.notes
    }

    removeAllArchive(): Note[] {
        this.notes = this.notes.filter(note => note.archive) 

        return this.notes
    }
}