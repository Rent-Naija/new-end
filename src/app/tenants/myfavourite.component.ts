import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfavourite',
  templateUrl: './myfavourite.component.html',
  styleUrls: ['./tenant.component.css']
})
export class MyfavouriteComponent implements OnInit {

  tenantEntryDate: string = "December 25, 2019";

  constructor() { }

  ngOnInit() {
  }

}
