import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertyrent',
  templateUrl: './propertyrent.component.html',
  styleUrls: ['./tenant.component.css']
})
export class PropertyrentComponent implements OnInit {

  tenantEntryDate: string = "December 25, 2019";

  constructor() { }

  ngOnInit() {
  }

}
