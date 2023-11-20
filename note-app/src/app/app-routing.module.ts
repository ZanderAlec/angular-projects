import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { NoteComponent } from './note/note.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'form', component: NewNoteComponent},
  {path: 'notePage/:title/:description', component: NoteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
