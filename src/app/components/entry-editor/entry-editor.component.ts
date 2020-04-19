import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutsService } from '../../services/workouts.service';
@Component({
  selector: 'app-entry-editor',
  templateUrl: './entry-editor.component.html',
  styleUrls: ['./entry-editor.component.css']
})
export class EntryEditorComponent implements OnInit {
  public workout: any = {};
  public loading = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: WorkoutsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id !== 'new') {
        this.loading = true;
        this.api.getWorkout(params.id).subscribe(data => {
          this.workout = data;
          this.loading = false;
        });
      };
    });
  }

  save() {
    this.loading = true;
    this.api.saveWorkout(this.workout).subscribe(data => {
      this.loading = false;
      this.router.navigate(['/workouts'])
    })
  }

}
