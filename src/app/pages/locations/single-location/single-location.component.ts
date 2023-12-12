import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-single-location',
  templateUrl: './single-location.component.html',
  styleUrls: ['./single-location.component.scss']
})
export class SingleLocationComponent {

  @Input() location: any;

  constructor(protected ref: NbDialogRef<SingleLocationComponent>) 
  { }

  dismiss() {
    this.ref.close();
  }

}
