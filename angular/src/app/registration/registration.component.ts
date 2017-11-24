import { Component, OnInit, Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from './password-validation';
import { EqualTextValidator } from "angular2-text-equality-validator"; 


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {

  newUser = {
    name : '',
    email : '',
    phone : '',
    // password : ['', Validators.required],
    // confirmPassword : ['', Validators.required]
    password : '',
    confirmPassword : '',
    }
    ;
passwordOk = false;
  constructor() { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    this.userService.registerUser(this.newUser).subscribe(data => {
      if(data){
       alert("Success");
       location.reload();
        console.log("successfull created user");
      
      } else {
        alert("Error");
        console.log("error created user")
      }
    });
  }


}
