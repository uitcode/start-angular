import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFilmComponent } from './edit-film.component';
import { EditFilmRoutingModule } from './edit-film.routing';

@NgModule({
  declarations: [EditFilmComponent],
  imports: [CommonModule, EditFilmRoutingModule]
})
export class EditFilmModule {}
