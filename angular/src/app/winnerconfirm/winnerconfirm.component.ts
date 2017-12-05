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
    pid : '',
    };
    user_id : '';
    high_amount : number = 0;
    

  constructor(private userService:UserService, private productService:ProductService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    let temp : number = 0;
    this.sub = this.route.params.subscribe(params => {
      this.newproduct.pid = params.id;
      this.productService.getProduct(params.id).subscribe(data => {
        for(let i=0; i<= data.bidders.length-1; i++){
          if(data.bidders[i].bid_status == "confirmed"){
            alert("Unauthorized access ...!");
            this.router.navigate(['/home']);
          }} 
          // To get the highest bid amt and bidder
          for(let i=0; i<= data.bidders.length-1; i++){
           if(data.bidders[i].bid_status != "confirmed" && data.bidders[i].bid_status != "rejected"){
                temp = data.bidders[i].amount;
                if(this.high_amount <= temp ){
                  this.high_amount = temp;
                  this.user_id = data.bidders[i].user_id;
                }
          } 
        }
        console.log(this.high_amount);
        console.log(this.user_id);
      });
   });
  }

  confirmed(){
    this.isConfirm = true;
    this.productService.updateStatusConfirm(this.newproduct.pid).subscribe(data1 => {});
  }

  rejected(){
    //update status n send mail to second person
  }

  onWinnerConfirm(){
//     this.userService.saveAddress(this.newproduct).subscribe(data => {
//       if(data.success==true){
//         this.productService.updateStatusConfirm(this.newproduct.pid).subscribe(data1 => {
//           if(data1.success==true){
//           alert("Confirmed...");
//           this.router.navigate(['/home']);
//           }else{
//             alert("Something went wrong...!");
//             this.router.navigate(['/home']);
//           }
//     });
//     }    
//   });

// }
}
}