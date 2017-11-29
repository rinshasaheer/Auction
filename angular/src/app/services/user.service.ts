import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private _regUrl = "/user/register";
  private _verifyUrl = "/user/verify/";
  
  constructor(private http:Http) { }

  registerUser(user){
    // console.log(JSON.stringify(user));
    let headers = new Headers({ 'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers : headers});
    return this.http.post(this._regUrl, JSON.stringify(user),options)
    .map((response : Response) => response.json());
  }

  verifyUser(verif_id){
    let headers = new Headers({ 'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers : headers});
    return this.http.put(this._verifyUrl + verif_id,options)
      .map((response : Response) => response.json());
  }
}
