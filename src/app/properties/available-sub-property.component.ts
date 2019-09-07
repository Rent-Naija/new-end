import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-available-sub-property',
  templateUrl: './available-sub-property.component.html',
  styleUrls: ['./property.component.css']
})
export class AvailableSubPropertyComponent implements OnInit {
@Input() availablesubp: any;
  constructor() { }

  ngOnInit() {
  }

}
