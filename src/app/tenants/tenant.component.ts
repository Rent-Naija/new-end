import { Component, OnInit } from '@angular/core';
import { Time, WeekDay } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {
  today: Date;
  xmas: Date;
  msPerDay: number;
  timeLeft: number;
  e_daysLeft: number;
  daysLeft: WeekDay;
  e_hrsLeft: number;
  hrsLeft: number;
  minsLeft: number;
  remainDate: string;



  constructor(private titleService: Title) {
   this.calculateRemainingDate("December 25, 2019")
   this.titleService.setTitle("Tenant Page")

  }

  ngOnInit() {
  }

  calculateRemainingDate(paymentDate: string): string {
       this.today = new Date();

    this.xmas = new Date(paymentDate);
    this.msPerDay = 24 * 60 * 60 * 1000 ;
    this.timeLeft = (this.xmas.getTime() - this.today.getTime());

    this.e_daysLeft = this.timeLeft / this.msPerDay;
    this.daysLeft = Math.floor(this.e_daysLeft);
    this.e_hrsLeft = (this.e_daysLeft - this.daysLeft)*24;
    this.hrsLeft = Math.floor(this.e_hrsLeft);
    this.minsLeft = Math.floor((this.e_hrsLeft - this.hrsLeft)*60);

    return this.remainDate = `There are only ${this.daysLeft}  days  ${this.hrsLeft}
    hours and  ${this.minsLeft} minutes left Until December 25th 2015`;

  }

}
