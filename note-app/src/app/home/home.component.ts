import { Component } from '@angular/core';
import { Note } from '../models/note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  noteList: Array<Note> = [];


  constructor(private noteService: NotesService){
    this.noteList = this.noteService.getNoteList();
  }

  ngOnInit(): void{
   
  }
}
