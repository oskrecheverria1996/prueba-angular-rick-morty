import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss']
})
export class SingleCharacterComponent implements OnInit{

  @Input() character: any;

  constructor(protected ref: NbDialogRef<SingleCharacterComponent>,) {

  }

  ngOnInit(): void {
    
  }

  dismiss() {
    this.ref.close();
  }

}
