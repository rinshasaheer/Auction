import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class UserService {
  authToken: any;
  user: any;

  private _regUrl = "/user/register";
  private _verifyUrl = "/user/verify/";
  private _genTokenUrl = "/user/genToken/";
  private _authUrl = "/user/authenticate";
  url = "http://localhost:3000/";
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
    console.log(this._verifyUrl+verif_id);
   return this.http.put(this._verifyUrl + verif_id,options)
   .map((response : Response) => response.json());
  }

  sendmail(){
// console.log("hi");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + 'user/getemail',{headers:headers})
    .map(res =>res.json());
     
}


  generateToken(id){
    let headers = new Headers({ 'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers : headers});
    console.log(this._genTokenUrl+id);
    return this.http.put(this._genTokenUrl + id,options)
      .map((response : Response) => response.json());
  }

  loggedIn() {
    // console.log(tokenNotExpired('id_token'));
    return tokenNotExpired('id_token');
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this._authUrl, user,{headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  getAllUsersById(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + 'user/users_id_as_index',{headers:headers})
    .map(res =>res.json());
  }

}
