import { Component, OnInit } from '@angular/core';
import { Note } from './models/note';
import { NotesService } from './services/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'note-app';
  noteList: Array<Note> = [];


  constructor(private noteService: NotesService){
    this.noteList = this.noteService.getNoteList();
  }

  ngOnInit(): void{
   
  }



}
