import { Component, OnInit, Input } from '@angular/core';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'tenant-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./tenant.component.css']
})
export class MenuComponent implements OnInit {
  @Input('_remainDate') dd: string;
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
  constructor() {
  }

  ngOnInit() {
    this.calculateRemainingDate(this.dd);
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
