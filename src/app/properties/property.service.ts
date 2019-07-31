import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map, retry  } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { Iproperty } from './property';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  // private _url = "http://rentnaija.ng/api";
  // private _url = "http://rentapi.localhost/api";
  private _url = "http://rentapi.localhost/api";
  /**
   *
   */
  constructor(private http: HttpClient) {}
  getHostels(): Observable<any>{
    return this.http.get<any>(this._url + '/properties/hostel');
  }

  getViewid(viewid: string): Observable<Iproperty>{
    return this.http.get<Iproperty>(this._url + '/propertyview/' + viewid);
  }

  getHotels(): Observable<any>{
    return this.http.get<any>(this._url + '/properties/hotel');
  }

  getrents(): Observable<any>{
    return this.http.get<any>(this._url + '/properties/rent');
  }

  searchHostels(state: any): Observable<Iproperty[]>{
    return this.http.get<Iproperty[]>(this._url + '/hostel/' + state );
  }

  searchHotels(state: any, city: any, price: any): Observable<Iproperty[]>{
    return this.http.get<Iproperty[]>(this._url + '/hotel/' + state + '/'  + city + '/'  + price);
  }

  searchRent(state: any, city: any, price: any): Observable<Iproperty[]>{
    return this.http.get<Iproperty[]>(this._url + '/house/' + state + '/'  + city + '/'  + price);
  }



  getproperties(type: any, propertyid: number): Observable<any>{
   return this.http.get<any>(this._url + '/' + type + '/'  + propertyid);
  }

  getpropertyinfo(propertyid: number): Observable<any>{
    return this.http.get<any>(this._url + '/subpropertyinfo/'  + propertyid);
  }

  allsubproperty(){
    return this.http.get<any>(this._url + '/subproperty' );
  }

  subProperties(propertyid: any): Observable<any>{
    return this.http.get<any>(this._url + '/subproperty/' + propertyid );
  }

  //beginnning of likes/favourites
  getfavourites(id: number): Observable<any>{
    return this.http.get<any>(this._url + '/likes/' + id, httpOptions);
  }

  checkfavourite(propertyid: number, userid: string ): Observable<any>{
    return this.http.get<any>(this._url + '/likes/' + propertyid + '/' + userid, httpOptions);
  }

  addfavourite(propertyid: number, userid: string ){
    return this.http.post(this._url + '/addlike/' + propertyid + '/' + userid, httpOptions);
  }



  //endning of likes/favourites



  propertylist(): Observable<Iproperty[]>{
    return this.http.get<Iproperty[]>(this._url + '/allproperty');
  }
}
