import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewNoteComponent } from './new-note/new-note.component';
import { NoteComponent } from './note/note.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'form', component: NewNoteComponent},
  {path: 'notePage/:id', component: NoteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
