import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutEnum } from '@core/enum/layout.enum';
import { EpisodeComponent } from './episode.component';

const routes: Routes = [
  {
    path: '',
    layout: LayoutEnum.MAIN,
    component: EpisodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule {}
