import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../models/note';
import { GeralService } from '../services/geral.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit{

  note: Note;


  constructor(private route: ActivatedRoute, private noteService: NotesService, private geral: GeralService){
    this.note = {title: " ", description: " ", date : new Date(0)}
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {      
      this.note = this.noteService.getNoteById(0);
    });
  }

  return(){
    this.geral.goToHome();
  }








}
