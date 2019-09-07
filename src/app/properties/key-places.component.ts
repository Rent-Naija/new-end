import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-key-places',
  templateUrl: './key-places.component.html',
  styleUrls: ['./property.css']
})
export class KeyPlacesComponent implements OnInit {
@Input() moreinfo: any;
  constructor() { }

  ngOnInit() {
  }

}
