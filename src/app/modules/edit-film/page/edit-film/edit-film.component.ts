import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/data/api.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { EMPTY } from 'rxjs';
import { catchError, debounceTime } from 'rxjs/operators';
@UntilDestroy()
@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.scss']
})
export class EditFilmComponent implements OnInit {
  debugger;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  getData(): any {
    return this.apiService
      .get('/duy')
      .pipe(
        untilDestroyed(this),
        debounceTime(500),
        catchError(err => {
          return EMPTY;
        })
      )
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
