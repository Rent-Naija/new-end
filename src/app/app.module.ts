import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShower } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faToilet } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { HostelListComponent } from './properties/hostel-list.component';
import { HotelListComponent } from './properties/hotel-list.component';
import { PropertyDetailComponent } from './properties/property-detail.component';
import { TenantComponent } from './tenants/tenant.component';
import { SubpropertiesComponent } from './shared/subproperties.component';
import { DashboardComponent } from './admin/dashboard.component';
import { PropertyrentComponent } from './tenants/propertyrent.component';
import { MenuComponent } from './tenants/menu.component';
import { MyfavouriteComponent } from './tenants/myfavourite.component';
import { LikeButtonComponent } from './properties/like-button.component';
import { KeyPlacesComponent } from './properties/key-places.component';
import { SubPropertiesListComponent } from './properties/sub-properties-list.component';
import { AvailableSubPropertyComponent } from './properties/available-sub-property.component';
import { LeftMenuComponent } from './admin/left-menu.component';
import { NavBarComponent } from './shared/nav-bar.component';
import { ProfileComponent } from './admin/profile.component';
import { MybankComponent } from './admin/mybank.component';
import { MyfavComponent } from './admin/myfav.component';

@NgModule({
  declarations: [
    AppComponent,
    HostelListComponent,
    HotelListComponent,
    PropertyDetailComponent,
    TenantComponent,
    SubpropertiesComponent,
    DashboardComponent,
    PropertyrentComponent,
    MenuComponent,
    MyfavouriteComponent,
    LikeButtonComponent,
    KeyPlacesComponent,
    SubPropertiesListComponent,
    AvailableSubPropertyComponent,
    LeftMenuComponent,
    NavBarComponent,
    ProfileComponent,
    MybankComponent,
    MyfavComponent,

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'hostels',
        component: HostelListComponent
      },
      {
        path: 'hotels',
        component: HotelListComponent
      },
      {
        path: 'p/:type/:id',
        component: PropertyDetailComponent
      },
      {
        path: 'tenant',
        component: TenantComponent
      },
      {
        path: 'myrent',
        component: PropertyrentComponent
      },
      {
        path: 'myfavourite',
        component: MyfavouriteComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'myfav',
        component: MyfavComponent
      },
      {
        path: 'mybank',
        component: MybankComponent
      },
      {
        path: 'myprofile',
        component: ProfileComponent
      }
    ])
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   *
   */
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faShower,faCar, faToilet, faBed,faCamera,faHeart,faCheckCircle,
      faEye,faAt,faGripLines,faHome,faCity,faGraduationCap,faUserCircle,
      faPowerOff,faMapMarker,faComments,faDoorOpen,faDoorClosed,faSearch,faMoneyBill,faUserTie,faBuilding);


  }
 }
