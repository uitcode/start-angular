import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutEnum } from '@core/enum/layout.enum';
import { FilmComponent } from './film.component';

const routes: Routes = [
  {
    path: '',
    layout: LayoutEnum.MAIN,
    component: FilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule {}
