import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit{

  title: string | null;
  description: string | null;


  constructor(private route: ActivatedRoute){
    this.title = "";
    this.description = "";
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      const t = value.get('title');
      const d = value.get('description');

    this.title = t;
    this.description = d;
        
    });
  }






}
