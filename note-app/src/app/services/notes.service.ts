import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  noteList: Array<Note>;

  constructor() { 
    this.noteList = []; 
  }

  insertNote(note: Note){
    this.noteList.push(note);
  }

  getNoteList(){
    return this.noteList;
  }

  getNoteById(id: number){
    return this.noteList[id];
  }

  removeNote(id: number){
    this.noteList.splice(id, 1);
  }


}
