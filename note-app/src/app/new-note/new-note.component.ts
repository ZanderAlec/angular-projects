import { Component, NgModule } from '@angular/core';
import { Note } from '../models/note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {
  constructor(private noteService: NotesService){

  }

  onSubmit(f: any){
    console.log(f);
    let newNote: Note = {
      title: f.value.title,
      description: f.value.description
    };

    this.noteService.insertNote(newNote);

    console.log(this.noteService.getNoteList());
  }
}
