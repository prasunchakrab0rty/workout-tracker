import { Component, OnInit } from '@angular/core';
import { WorkoutsService } from '../../services/workouts.service';
import * as _ from 'lodash'
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';
import { TargetModalComponent } from '../target-modal/target-modal.component';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  public workouts = [];
  public loading = false;
  public perfTargets = {};
  constructor(private api: WorkoutsService, private modal: NgbModal) { }

  ngOnInit() {
    this.loading = true;
    forkJoin(
      this.api.getWorkouts(),
      this.api.getPerfTargets()
    ).subscribe(([workouts, perfTargets]) => {
      this.workouts = workouts;
      this.perfTargets = perfTargets;
      this.loading = false;
    })
  }

  deleteWorkoutId(id, deleteModal) {
    let option: NgbModalOptions = { size: 'sm', centered: true }
    this.modal.open(deleteModal, option).result.then(yes => {
      this.api.deleteWorkout(id).subscribe(data => {
        _.remove(this.workouts, { id: id })
      }, no => console.log(`Dismissed ${no}`))
    })
  }

  showPerfTargets() {
    let modalRef = this.modal.open(TargetModalComponent);
    modalRef.componentInstance.perfTargets = this.perfTargets;
    modalRef.result.then(result => {
      console.log('Modal result', result);
      this.loading = true;
      this.api.savePerfTargets(result).subscribe(data => {
        this.perfTargets = data;
        this.loading = false;
      });
    }, reason => {
      console.log(`Dismissed reason: ${reason}`);
    });
  }

}
