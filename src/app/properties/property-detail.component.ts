import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from './property.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property.css']
})
export class PropertyDetailComponent implements OnInit {

propertyId;
propertyViewId;
propertyType: any;

property;
propertyinfo;
moreinfo;
propertyImg: any;
subpropertieslist;
ownerid;
  sagentid;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private _router: Router,
    private propertyService: PropertyService) {

      this.route.paramMap.subscribe(params => {
        this.propertyViewId = params.get('id');
        this.propertyType = params.get('type');
      });

  }

  ngOnInit() {
    this.propertyService.getViewid(this.propertyViewId).subscribe(response => {
      this.propertyId = response.id;
      this.getproperties(this.propertyId,this.propertyType)
    })
  }

  getproperties(id,type){
    this.propertyService.getproperties(type,id)
    .subscribe(response => {
      console.log(response);
      this.property = response.property;
      this.moreinfo = response.propertyinfo;
      this.propertyImg = response.propertyimages;
      this.ownerid = this.property.ownerid;
      this.sagentid = this.property.sagentid;
      this.titleService.setTitle(this.property[0].name + ' - ' + this.property[0].address + ' | RentNaija');
        });
  }
}
