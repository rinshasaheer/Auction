import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  url = "http://localhost:3000/";
  constructor(private http:Http) { }

  getAllClosedProduct(){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.get(this.url + 'products/closed_products',{headers:headers})
      .map(res =>res.json());
  }
  getAllUpcomingProduct(){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.get(this.url + 'products/upcoming_products',{headers:headers})
      .map(res =>res.json());
  }
}
