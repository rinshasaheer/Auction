import { Component, OnInit } from '@angular/core';
import { CanActivate,ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../services/user.service';
import { ProductService} from '../services/product.service';

@Component({
  selector: 'adminviewed',
  templateUrl: './adminviewed.component.html',
  styleUrls: ['./adminviewed.component.css']
})
export class AdminviewedComponent implements OnInit {
  
  private sub: any;
  constructor(private userService: UserService,private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userService.getLoggedUSerDetails().subscribe(info =>{
      if(info.role !="admin"){
        this.router.navigate(['/login']);
      }
    });
    this.sub = this.route.params.subscribe(params => {
      this.productService.adminViewed(params.id).subscribe(data => {
        if(data.success){
         alert("Success, Redirecting ...");
         this.router.navigate(['/dashboard']);
          console.log("successfull");
        
        } else {
          alert("Error...!");
          this.router.navigate(['/dashboard']);
          console.log("error")
        }
      });

   });
  }

}
