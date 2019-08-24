import { Component, OnInit } from '@angular/core';
import { Time, WeekDay } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {

  tenantEntryDate: string = "December 25, 2019";



  constructor(private titleService: Title) {
   this.titleService.setTitle("Tenant Page")

  }

  ngOnInit() {
  }


}
