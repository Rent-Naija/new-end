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
  availablesubp;
  favourites;
  subUrl;
  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private _router: Router,
    private propertyService: PropertyService) {
      this.subUrl = 'http://rentapi.localhost/storage/coverimages/';
      this.route.paramMap.subscribe(params => {
        this.propertyViewId = params.get('id');
        this.propertyType = params.get('type');
      });

  }

  ngOnInit() {
    this.propertyService.getViewid(this.propertyViewId).subscribe(response => {
      this.propertyId = response.id;
      this.getProperties(this.propertyId,this.propertyType)
      this.subPropertyInfo(this.propertyId)
      this.getTotalFavourite(this.propertyId)
      this.subProperties(this.propertyId)
    })
  }

  getProperties(id,type){
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

  subPropertyInfo(id){
    this.propertyService.getpropertyinfo(id)
      .subscribe(response => {
        this.availablesubp = response;
        console.log(this.availablesubp);
      });
  }

  subProperties(id){
     this.propertyService.subProperties(id).subscribe(
       response => {
         this.subpropertieslist = response.subproperty;
         console.log(this.subpropertieslist);
       })
   }

  getTotalFavourite(id){
    this.propertyService.getfavourites(id)
    .subscribe(response => {
      this.favourites = response.likeTotal;
    });
   }


}

