import { ExoNotePartitionComponent } from './exo-note-partition/exo-note-partition.component';
import { ExoNoteComponent } from './exo-note/exo-note.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'exo-note', component: ExoNoteComponent },
  { path: 'exo-note-partition', component: ExoNotePartitionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
