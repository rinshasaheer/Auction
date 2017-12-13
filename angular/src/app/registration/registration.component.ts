import { Component, OnInit, Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from './password-validation';
// import { EqualTextValidator } from "angular2-text-equality-validator"; 
import { UserService} from '../services/user.service';
import { CanActivate, Router } from '@angular/router';
// import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UserService]
})

export class RegistrationComponent implements OnInit {
  showSuccess : Boolean = false;
  showDanger : Boolean = false;
  timestamp = new Date().getTime().toString();
  newUser = {
    name : '',
    email : '',
    phone : '',
    password : '',
    // confirmPassword : ''
    verification_code : this.timestamp + Math.floor(100000 + Math.random() * 900000),
    };

    User = {
      confirmPassword : ''
    }

  constructor(private userService:UserService, private routes: Router,
    //  private _flashMessagesService: FlashMessagesService
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    console.log(this.newUser);
    this.userService.registerUser(this.newUser).subscribe(data => {
      if(data.success==true){
        // this._flashMessagesService.show('Account created successfully, Please verify your Email address', { cssClass: 'alert-success', timeout: 4000 });
        this.showSuccess = true;
        setTimeout(() => {  
          this.routes.navigate(['/login']);
          console.log("successfull created user");
        }, 3000);
      
      } else {
        // this._flashMessagesService.show('The email address you specified is already in use. Please login to continue', { cssClass: 'alert-danger', timeout: 4000 });
        this.showDanger = true;
        setTimeout(() => {  
          this.showDanger = false;
          console.log("Error created user");
        }, 4000);
      }
    });
  }
}
