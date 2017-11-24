import { Component, OnInit, Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from './password-validation';
// import { EqualTextValidator } from "angular2-text-equality-validator"; 
import { UserService} from '../services/user.service';
import {  CanActivate, Router } from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UserService]
})

export class RegistrationComponent implements OnInit {

  newUser = {
    name : '',
    email : '',
    phone : '',
    password : '',
    // confirmPassword : ''
    };

    User = {
      confirmPassword : ''
    }
  constructor(private userService:UserService, private routes: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    console.log(this.newUser);
    this.userService.registerUser(this.newUser.name).subscribe(data => {
      if(data){
       alert("Success");
      //  this.routes.navigate(['/login']);
        console.log("successfull created user");
      
      } else {
        alert("Error");
        console.log("error created user")
      }
    });
  }
debugger;
}
