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

  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.verif_id = +params['id']; // (+) converts string 'id' to a number
      this.userService.verifyUser(this.verif_id).subscribe(data => {
        if(data){
         alert("Success, Redirecting ...");
         this.router.navigate(['/login']);
          console.log("successfull verified user");
        
        } else {
          alert("Error on verification");
          this.router.navigate(['/login']);
          console.log("error verified user")
        }
      });

   });
  }



}
