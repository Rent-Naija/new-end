import { Component, OnInit } from '@angular/core';
import { PropertyService } from './property.service';
import { Title } from '@angular/platform-browser';
import { Schools } from '../shared/schools';

@Component({
  selector: 'app-hostel-list',
  templateUrl: './hostel-list.component.html',
  styleUrls: ['./property.css']
})
export class HostelListComponent implements OnInit {
  hostels: [];
  filteredhostels: [];
  subproperties: [];
  imageUrl: string = "http://rentapi.localhost:8080/storage/cover_Images/";

  constructor(
              private propertyService: PropertyService,
              private titleService: Title) {

      this.titleService.setTitle("RentNaija: Hostels List");

      this.propertyService.getHostels()
        .subscribe(response => {
          this.hostels = response.property;
          this.subproperties = response.subproperty;
          console.log(response.subproperty)

          })
    }

    handleEventClick(data) {
      console.log(data);
    }
  ngOnInit() {
  }

}
