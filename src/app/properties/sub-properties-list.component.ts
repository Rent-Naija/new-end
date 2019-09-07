import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-properties-list',
  templateUrl: './sub-properties-list.component.html',
  styleUrls: ['./property.css']
})
export class SubPropertiesListComponent implements OnInit {
@Input() subpropertieslist: any;
@Input() p_id: any;

  constructor() { }

  ngOnInit() {
  }

}
