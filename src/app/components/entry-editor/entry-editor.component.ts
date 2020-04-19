import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutsService } from '../../services/workouts.service';
import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-entry-editor',
  templateUrl: './entry-editor.component.html',
  styleUrls: ['./entry-editor.component.css']
})
export class EntryEditorComponent implements OnInit {
  public workout: any = {};
  public loading = false;
  public startDate: any;
  public maxDate: NgbDateStruct;
  calenderIcon = faCalendarAlt
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: WorkoutsService
  ) {
    let today = new Date();
    this.maxDate = NgbDate.from({ year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id !== 'new') {
        this.loading = true;
        this.api.getWorkout(params.id).subscribe(data => {
          this.workout = data;
          let d = new Date(this.workout.date)
          this.startDate = { year: d.getFullYear(), month: d.getMonth() + 1 }
          this.loading = false;
        });
      };
    });
  }
  locationsSearch = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      // tap(() => this.loading = true),
      switchMap(term => this.api.searchLocations(term)),
      map(locations => _.map(locations, 'name')),
      // tap(() => this.loading = false)
    );

  save() {
    this.loading = true;
    this.api.saveWorkout(this.workout).subscribe(data => {
      this.loading = false;
      this.router.navigate(['/workouts'])
    })
  }

}
