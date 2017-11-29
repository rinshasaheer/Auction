import { Component, OnInit } from '@angular/core';
import { CanActivate,ActivatedRoute, Router } from '@angular/router';
import { UserService} from '../services/user.service';

@Component({
  selector: 'socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {
  verif_id: number;
  private sub: any;

  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // this.verif_id = +params['id']; // (+) converts string 'id' to a number
      this.userService.generateToken(params.id).subscribe(data => {
        if(data.success){
          this.userService.storeUserData(data.token, data.user);
          if(data.user.role=="user"){
            
            this.router.navigate(['/home']);
          }
          if(data.user.role=="admin"){
            this.router.navigate(['/dashboard']);
          }
        }
      });

   });
  }

}
