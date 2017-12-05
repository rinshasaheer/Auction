import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  private _regUrl = "/user/register";
  private _verifyUrl = "/user/verify/";
 
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

//all users
getAllUser(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.url + 'user/users',{headers:headers})
  .map(res =>res.json());

}
//deleteded users
getDeletedUsers(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.url + 'user/deletedusers',{headers:headers})
  .map(res =>res.json());

}
//disabled users
getDisabledUsers(){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.url + 'user/disabledusers',{headers:headers})
  .map(res =>res.json());

}
//delete user
deleteUser(id){
  let headers = new Headers();
  //this.loadToken();
 // headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.delete(this.url + 'user/delete/'+id,{headers:headers})
  .map(res =>res.json());
}

//disable user
blockUser(id){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.delete(this.url + 'user/disable/'+id,{headers:headers})
  .map(res =>res.json());
}
//unblock
unblockUser(id){
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.delete(this.url + 'user/unblock/'+id,{headers:headers})
  .map(res =>res.json());
}
}