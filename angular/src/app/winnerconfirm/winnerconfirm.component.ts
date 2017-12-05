import { Component, OnInit } from '@angular/core';
import { CanActivate,ActivatedRoute, Router } from '@angular/router';
import { UserService} from '../services/user.service';
import { ProductService} from '../services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'winnerconfirm',
  templateUrl: './winnerconfirm.component.html',
  styleUrls: ['./winnerconfirm.component.css']
})
export class WinnerconfirmComponent implements OnInit {
  private sub: any;
  isConfirm : boolean = false;
  newproduct = {
    name : '',
    pin : '',
    phone : '',
    addr1 : '',
    addr2 : '',
    addr3 : '',
    addr4 : '',
    };

  constructor(private userService:UserService,private productService:ProductService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // console.log(params.id);
      this.productService.getProduct(params.id).subscribe(data => {
        console.log(data);
        //check here that the user is proper
      });
   });
  }

  confirmed(){
    this.isConfirm = true;
    //update status
  }

  rejected(){
    //update status n send mail to second person
  }

  onWinnerConfirm(){
    console.log("hello");
  }

}
