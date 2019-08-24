import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-subproperties',
  templateUrl: './subproperties.component.html',
  styleUrls: ['./subproperties.component.css']
})
export class SubpropertiesComponent implements OnChanges {
  @Input() _subproperty: any;
  @Output() eventClick = new EventEmitter();

  constructor() {
   }

   handleClickMe() {
    //  console.log("am beau")
    this.eventClick.emit('foo');
   }

  ngOnChanges(): void {

  }



}
