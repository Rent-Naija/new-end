import { Component, OnInit, OnChanges, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-subproperties',
  templateUrl: './subproperties.component.html',
  styleUrls: ['./subproperties.component.css']
})
export class SubpropertiesComponent implements OnChanges {
  @Input() _subproperty: any;

  constructor() {
   }

  ngOnChanges(): void {

  }



}
