import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewNoteComponent } from '../new-note/new-note.component';
import { NoteComponent } from '../note/note.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewNoteComponent,
    NoteComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
