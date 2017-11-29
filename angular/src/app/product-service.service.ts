import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductServiceService {

  constructor(private _http: Http) { }

  loadClosedProduct(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get('http://localhost:3000/products/completedproduct',  {headers: headers})
      .map(res => res.json());
  }

  loadHighestBidder(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get('http://localhost:3000/products/highBid/'+id,  {headers: headers})
      .map(res => res.json());
  }

  loadUpcomingProduct(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get('http://localhost:3000/products/upcomingproduct',  {headers: headers})
      .map(res => res.json());
  }
}
