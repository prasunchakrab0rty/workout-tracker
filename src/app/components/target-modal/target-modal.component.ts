import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-target-modal',
  templateUrl: './target-modal.component.html',
  styleUrls: ['./target-modal.component.css']
})
export class TargetModalComponent implements OnInit {
  public perfTargets: any = {};

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  save() {
    this.activeModal.close(this.perfTargets);
  }


}
