import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductServiceService {

  authToken = '';
  authUser : any;
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

  loadMyAuctionProduct(id){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get('http://localhost:3000/products/myauctionproduct/'+id,  {headers: headers})
      .map(res => res.json());
  }

  addInterestedCandidate(id){
    // console.log("d");
    // let headers = new Headers();
    // this.loadToken();
    // headers.append('Authorization', this.authToken);
    // headers.append('Content-Type', 'application/json');
    // return this._http.put('http://localhost:3000/products/updateInterested/'+id, {headers: headers})
    //   .map(res => res.json());
// console.log(id);
      //let headers = new Headers();
      this.loadToken();
    //  headers.append('Authorization', this.authToken);
      let headers = new Headers({ 'Content-Type' : 'application/json', 'Authorization' : this.authToken});
      let options = new RequestOptions({ headers : headers});
      //headers.append('Content-Type', 'application/json');
      return this._http.put('http://localhost:3000/products/updateInterested/'+id,{},options)
      .map(res =>res.json());
  }
  

  loadNotifications(){
    let Uid =  this.loadUserId();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get('http://localhost:3000/products/mynotifications/'+Uid,  {headers: headers})
      .map(res => res.json());
  }

 

  loadToken(){
    this.authToken = localStorage.getItem('id_token');
  }

  loadUserId(){
    this.authUser = JSON.parse(localStorage.getItem('user'));
    return this.authUser.id;
  }
}
