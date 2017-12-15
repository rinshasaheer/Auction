import { Component, OnInit } from '@angular/core';
import { CanActivate,ActivatedRoute, Router } from '@angular/router';
import { UserService} from '../services/user.service';

@Component({
  selector: 'email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css'],
  providers : [UserService]
})
export class EmailVerificationComponent implements OnInit {
  verif_id: number;
  private sub: any;
  showDanger : Boolean =false;
  showSuccess : Boolean =false;

  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.userService.verifyUser(params.id).subscribe(data => {
        // console.log(data);
        if(data.success){
        //  alert("Success, Redirecting ...");
        // this.userService.generateToken(params.id).subscribe(data => {
        //   console.log(data);
        //   if(data.success){
        //     this.userService.storeUserData(data.token, data.user);
        //     if(data.user.role=="user"){
              
        //       this.router.navigate(['/home']);
        //     }
        //     if(data.user.role=="admin"){
        //       this.router.navigate(['/dashboard']);
        //     }
        //   }
        // });
         this.showSuccess = true;
         setTimeout(() => {  
           this.router.navigate(['/login']);
           console.log("successfull verified user");
         }, 3000);
        
        } else {
          // alert("Error on verification");
          this.showDanger = true;
          setTimeout(() => {  
            this.router.navigate(['/login']);
            console.log("error verified user");
          }, 3000);
          
        }
      });

   });
  }



}
