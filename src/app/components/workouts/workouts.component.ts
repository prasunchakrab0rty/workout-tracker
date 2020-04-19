import { Component, OnInit } from '@angular/core';
import { WorkoutsService } from '../../services/workouts.service';
import * as _ from 'lodash'

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  public workouts = [];
  public loading = false;

  constructor(private api: WorkoutsService) { }

  ngOnInit() {
    this.loading = true;
    this.api.getWorkouts().subscribe(data => {
      this.workouts = data;
      this.loading = false;
    })
  }

  deleteWorkoutId(id) {
    this.api.deleteWorkout(id).subscribe(data => {
      _.remove(this.workouts, { id: id })
    })
  }

}
