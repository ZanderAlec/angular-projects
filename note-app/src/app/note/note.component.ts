import { Component, Injector, OnInit } from '@angular/core';
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
  id: number;

  //Injections
  route: ActivatedRoute;
  noteService: NotesService;
  geral: GeralService;
  router: Router;

  constructor(private injector: Injector){

    this.route = injector.get<ActivatedRoute>(ActivatedRoute);
    this.noteService = injector.get<NotesService>(NotesService);
    this.geral = injector.get<GeralService>(GeralService);
    this.router = injector.get<Router>(Router);

    this.note = {title: " ", description: " ", date : new Date(0)};
    this.id = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {      
      this.id = parseInt(value.get('id') as string);
      this.note = this.noteService.getNoteById(this.id);
    });
  }

  return(){
    this.geral.goToHome();
  }

  deleteNote(){
    this.noteService.removeNote(this.id);
    this.return();
  }

  editNote(){
    this.router.navigate(['/form', this.id]);
  }

}
