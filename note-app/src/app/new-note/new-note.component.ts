import { Component, NgModule } from '@angular/core';
import { Note } from '../models/note';
import { NotesService } from '../services/notes.service';
import { Router } from '@angular/router';
import { GeralService } from '../services/geral.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {
  constructor(private noteService: NotesService, private router: Router, private geral: GeralService){

  }

  exit(){
    this.geral.goToHome();
  }

  onSubmit(f: any){

    let date = new Date();

    let newNote: Note = {
      title: f.value.title,
      description: f.value.description,
      date: date
    };

    this.noteService.insertNote(newNote);

    this.exit();
  }
}
