import { Component, NgModule, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NotesService } from '../services/notes.service';
import { ActivatedRoute } from '@angular/router';
import { GeralService } from '../services/geral.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit{
  id: string | null;
  newNote: Note;

  constructor(private noteService: NotesService, private geral: GeralService, private route: ActivatedRoute){
    this.id = null;
    this.newNote = {title: " ", description: " ", date : new Date(0)};
  }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id){
      this.newNote = this.noteService.getNoteById(parseInt(this.id));
    }
  }

  exit(){
    this.geral.goToHome();
  }

  onSubmit(){

    this.newNote.date = new Date();

    if(!this.id){
      this.noteService.insertNote(this.newNote);
    }

    this.exit();
  }
}
